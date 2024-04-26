class MyCar {
    #Model="ABC";
    constructor(name,milage,color){
       this.name = name;
       this.milage = milage;
       this.color = color; 
    }
    get Name(){
        return this.name;
    }
    get Milage(){
        return this.milage;
    }
    get Color(){
        return this.color;
    }
    set Name(name){
        this.name = name;
    }
    static Model = "New Model";
    static mySpeed = ()=>{
        console.log("100km /hr");
    }
};

let toyota = new MyCar("toyata","30km/hr","blue");
// console.log(toyota.name);
console.log(toyota.Name);
console.log(toyota.Color);
console.log(toyota.Milage);
toyota.Name ="wagnar";
console.log(toyota.Name);

console.log(MyCar.Model);
MyCar.mySpeed();

