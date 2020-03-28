export interface IConcreteClass {
    doAlgorithm(s: string):string
    setStrategy(strategy: IStrategy);
}

export interface IStrategy {
    execute(s: string): string
}

export class ConcreteClass implements IConcreteClass{
    private strategy: IStrategy;
    doAlgorithm(s: string): string {
        return this.strategy.execute(s);
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

}

export class ConcreteStrategyA implements IStrategy{
    execute(s: string): string {
        return s;
    }
}

export class ConcreteStrategyB implements IStrategy{
    execute(s: string): string {
        return s.split('').reverse().join('');
    }
}
