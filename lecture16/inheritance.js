class Vehicle {
    constructor(type){
        this.type =type;
    }
};

class Car extends Vehicle {
    constructor(type,name,milage,color){
        super(type);
        this.name = name;
        this.milage = milage;
        this.color = color;
    }
};
let maruti = new Car("four wheeler","suzuki","20km/hr","red");
console.log(maruti.type);

let s=4; //template string
console.log(`there are ${s} students`);