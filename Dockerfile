# BUILD ANGULAR APP
FROM node:20 as builder
ENV NODE_OPTIONS=--max-old-space-size=8192
ARG THEME
ENV THEME=${THEME}
ARG NAMESPACE
ENV NAMESPACE=${NAMESPACE}
WORKDIR /frontend
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm install lz-string@1.4.4
RUN npm install -g @angular/cli@~16.2.12
RUN if [ -z "$THEME" ]; then echo "THEME argument is required"; exit 1; fi
RUN if [ -z "$NAMESPACE" ]; then echo "NAMESPACE argument is required"; exit 1; fi
RUN npm run build:$NAMESPACE:$THEME

# DEPLOY ANGULAR APP
FROM nginx:alpine as server
ARG THEME
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /frontend/dist/$THEME /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
