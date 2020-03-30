interface IHandler {
    handle(x: number)
    setNext(handler: IHandler)
}
export abstract class AbstractHandler implements IHandler{
    protected nextHandler:  AbstractHandler;
    handle(x: number){
        if(this.nextHandler){
            return this.nextHandler.handle(x);
        } else{
            return 'NOT_HANDLE'
        }
   }
    setNext(handler:AbstractHandler): AbstractHandler{
       this.nextHandler = handler;
       return handler;
    }
}

export class HandlerA extends AbstractHandler{
    handle(x: number) {
        if(x < 2){
            console.log("Handled in handler A");
            return 'A';
        }
        return super.handle(x);
    }
}

export class HandlerB extends AbstractHandler{
    handle(x: number) {
        if(x<3){
            console.log("Handled in handler B");
            return 'B';
        }
        return super.handle(x);
    }
}
