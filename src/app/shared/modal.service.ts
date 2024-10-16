import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private modalContainer: HTMLElement;
    private modalClose: Subject<any> = new Subject();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {
        this.createModalContainer();
    }

    private createModalContainer() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.classList.add('modal-container');
        document.body.appendChild(this.modalContainer);
    }

    open(component: any, data?: any) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = factory.create(this.injector);

        // Pass data to the component
        if (data) {
            Object.assign(componentRef.instance, data);
        }

        this.appRef.attachView(componentRef.hostView);
        this.modalContainer.appendChild(componentRef.location.nativeElement);

        /*Handle close event
        componentRef.instance.close.subscribe(() => {
            this.close(componentRef);
        });*/

        return this.modalClose.asObservable();
    }

    private close(componentRef: ComponentRef<any>) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        this.modalContainer.removeChild(componentRef.location.nativeElement);
       // this.modalClose.next();
    }

    public  dismissAll(){

    }
}
