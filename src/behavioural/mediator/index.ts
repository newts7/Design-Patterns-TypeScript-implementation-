export interface IMediator {
    notify(eventName: string, message: string)
}

export class Mediator implements IMediator{
    private componentA: ComponentA;
    private componentB: ComponentB;
    constructor(componentA, componentB){
        this.componentA = componentA;
        this.componentB = componentB;
        this.componentA.setMediator(this);
        this.componentB.setMediator(this);
    }
    notify(eventName: string, message: string){
        if(eventName == 'A'){
            this.componentB.gotNewMessageB(message);
        }
        if (eventName == 'B'){
            this.componentA.gotNewMessageA(message);
        }
    }
}

export class BaseComponent {
    protected mediator: IMediator;
    constructor(mediator: IMediator = null){
        this.mediator  = mediator;
    }

    setMediator(mediator: IMediator){
        this.mediator = mediator;
    }
}
export class ComponentA  extends BaseComponent{
    doA(){
        console.log("Doing A");
        this.mediator.notify('A', 'message from A');
    }
    gotNewMessageA(message: string){
        console.log(message);
    }
}
export class ComponentB  extends BaseComponent{
    doB(){
        console.log("Doing B");
        this.mediator.notify('B', 'message from B');
    }
    gotNewMessageB(message: string){
        console.log(message);
    }
}
