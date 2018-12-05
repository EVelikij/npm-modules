export default class Greeter {
    constructor(private name: string) {}

    sayHello(): void {
        console.log(`Hello, ${this.name}!`);
    }
}