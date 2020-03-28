interface IObserver{
    update()
}
interface ISubject {
    attach(observer: IObserver)
    detach(observer: IObserver)
    notify()
 }

 export class Subject implements ISubject{
    private observers: Array<IObserver>;
    constructor(){this.observers = []}

     attach(observer: IObserver){
         this.observers.push(observer);
     }

     detach(observer: IObserver){
         const indexOfObserver = this.observers.indexOf(observer);
         if(indexOfObserver == -1){
             console.log("Observer not attached");
         }
         this.observers.splice(indexOfObserver, 1);
     }

     notify() {
         for(const observer of this.observers){
             observer.update();
         }
     }

     getObservers(): Array<IObserver>{ //exposed only for testing
        return this.observers;
     }

 }

 export class ConcreteObserverA implements IObserver{
     update() {
         console.log("Update called for observer A")
     }
 }

export class ConcreteObserverB implements IObserver{
    update() {
        console.log("Update called for observer B")
    }
}
