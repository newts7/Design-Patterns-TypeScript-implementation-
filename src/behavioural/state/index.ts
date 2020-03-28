export interface IContest {
    setState(state: IState): void
    transitionTo(state: IState): void
}

export interface IState {
    setContext(context: IContest): void
    handle(): void
}

export class Context implements IContest{
    private state: IState;

    setState(state: IState): void {
        this.state = state;
        this.state.setContext(this);
    }

    transitionTo(state: IState): void {
        this.state = state;
        this.state.setContext(this);
    }

    handleRequest(): void{
        this.state.handle();
    }

    getState(): IState{ //exposed only for testing
        return this.state;
    }

}

export abstract class State implements IState {
    protected context: IContest;

    setContext(context: IContest): void {
        this.context = context;
    }

    abstract handle(): void
}
export class ConcreteStateA extends State{
    handle(): void {
        console.log("Handling request in state A");
        this.context.transitionTo(new ConcreteStateB()); //State changes while performing any operation
    }

}

export class ConcreteStateB extends State{
    handle(): void {
        console.log("Handling request in state B");
    }
}
