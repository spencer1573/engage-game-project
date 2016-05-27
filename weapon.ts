class Weapon {

    constructor(private name: string) {
    }
    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

}

class Gun {
    public weapon: Weapon;
    constructor(private name: string) {
        this.weapon = new Weapon('');
    }
    public getName(): string {
        return this.weapon.getName();
    }
}

var gunSword = new Gun('sword');
gunSword.getName();

var twodArray = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}]
];




