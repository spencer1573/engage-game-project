
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

document.body.style.backgroundColor = "black"; 

for(var row = 0; row < 3; row++) {
    
    var containerDiv = document.createElement('div');
    containerDiv.id = "row-" + row;
    containerDiv.style.width = "300px";
    containerDiv.style.height = "75px";
    document.body.appendChild(containerDiv);

    for(var col = 0; col < 3; col++) {
        console.log(row + " " + col);

        var gridDiv = document.createElement('div');
        gridDiv.id = '' + row + ',' + col;
        gridDiv.style.width = "50px";
        gridDiv.style.height = "50px";
        gridDiv.style.margin = "12.5px";
        gridDiv.style.backgroundColor = "white";
        gridDiv.style.cssFloat = "left";
        document.getElementById('row-' + row).appendChild(gridDiv); 
    }
}

