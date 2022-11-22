//Different terminology in classes
//reference type
//terminology
//context
//instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log("Hi I am " + this.name + ", Im a " + this.type + ".");
    }
}

const player1 = new Player("Keshav", "Spartan");
player1.introduce();

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("wizard", this);
        
    }
    play() {
        console.log("weeeeee, I'm a " + this.type + "!");
    }
}

const wizard1 = new Wizard("shawn", "dark magic");
wizard1.play();