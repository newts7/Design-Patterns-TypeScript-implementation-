export class SimpleSingleton {
    private static instance: SimpleSingleton;

    private constructor() {}

    static getInstance() {
        if (!this.instance) {
            this.instance = new SimpleSingleton();
        }
        return this.instance;
    }

    private sayHello(): void {
        console.log("Hello");
    }
}
