pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    environment {
        PROJECT_TYPE = 'ANGULAR'
        SERVICE_REPOSITORY = credentials('app-repo')
        TOKEN_REPOSITORY = credentials('app-token')
    }

    stages {
        stage('Build Angular Service') {
            steps {
                script {
                    BRANCH_NAME = env.BRANCH_NAME
                    HASH = env.GIT_COMMIT
                }
            }
        }
        
        stage('Trigger Build Service Job') {
            steps {
                script {
                    build job: 'BUILD SERVICE IMAGE', parameters: [
                        string(name: 'PROJECT_TYPE', value: env.PROJECT_TYPE),
                        string(name: 'SERVICE_REPOSITORY', value: env.SERVICE_REPOSITORY),
                        string(name: 'TOKEN_REPOSITORY', value: env.TOKEN_REPOSITORY),
                        string(name: 'BRANCH_NAME', value: env.BRANCH_NAME),
                        string(name: 'HASH', value: env.GIT_COMMIT),
                    ]
                }
            }
        }
    }
}
