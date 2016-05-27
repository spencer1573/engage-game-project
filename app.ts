
interface AttrData {
    name:       string,
    age:        number, 
    weight?:    string 
}

export class Animal {
    constructor(public name: string, private age: number) {}

    public getName() : string {
        return this.name;
    }

}

class Car {
    constructor(parameters) {
        
    }
}

export class Bunny extends Animal {
    constructor(private attr: AttrData) {
        super(attr.name, attr.age);
    }
}

var animal = new Animal('George', 4);
animal.getName();


