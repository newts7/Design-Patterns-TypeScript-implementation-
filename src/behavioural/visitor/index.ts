interface IConcreteClass {
    doTaskA()
}

interface IVisitor {
    visitClient(client: ConcreteClass): void
}

export class ConcreteVisitor implements IVisitor{
    visitClient(client: ConcreteClass) {
        console.log("Adding new behaviour to concrete class");
        console.log("Now i am going to add new behaviour to its variables");
        client.clientVariable = client.clientVariable+1;
    }
}

export class ConcreteClass implements IConcreteClass{
    clientVariable: number;
    constructor(){this.clientVariable = 5;}
    doTaskA() {
        console.log("I used to do this task");
    }

    accept(visitor: IVisitor){
        visitor.visitClient(this);
    }
}
