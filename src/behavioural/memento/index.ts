export interface ICareTaker {
    backup()
    undo()
    showHistory()
}

export interface IMemento {
    getState(): string
    getName(): string
    getDate(): string
}


export interface IOriginator {
    save()
    restore(memento: IMemento)
}

export class CareTaker implements ICareTaker{
    private mementos: Array<IMemento>;
    private originator: Originator;
    constructor(originator){
        this.originator = originator;
        this.mementos = [];
    }

    backup() {
        this.mementos.push(this.originator.save());
    }

    showHistory(): Array<string> {
        let history: Array<string> = [];
        for(const memento of this.mementos){
            history.push(memento.getState());
        }
        return history;
    }

    undo() {
        if(!this.mementos.length){
            return -1;
        }
        const mememto = this.mementos.pop();
        this.originator.restore(mememto);
    }

}

export class Memento implements IMemento{
    private readonly state: string;
    private date: Date;
    private name: string;

    constructor(state: string){
        this.state = state;
    }
    getDate(): string {
        return this.date.toDateString();
    }

    getName(): string {
        return this.name;
    }

    getState(): string {
        return this.state;
    }
}

export class Originator implements IOriginator{
    private state: string;

    restore(memento: IMemento) {
        this.state = memento.getState();
    }

    save(): Memento{
        return new Memento(this.state);
    }

    setState(s: string){
        this.state = s;
    }

    getCurrentState(): string{
        return this.state;
    }

}
