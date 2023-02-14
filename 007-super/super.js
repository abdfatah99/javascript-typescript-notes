// super: used to access and call parent functions on object funcion

/* 
    Syntax: 
    super([argument]); -> call the parent constructor
    
    super.fucntionOnParent([argument])
*/

// when used in cunstructor, the super keyword appears alone and must be 
// used before `this` keyword. 

// super: call functions on parent object



// parent class
class Rectangle{
    constructor(){
        this.name = "Rectangle"; 
        this.height = 10; 
        this.width = 5;
    }

    printName(){
        console.log("This is belong to:", this.name);
    }

    get area(){
        return this.height * this.width; 
    }

    set area(value){
        this._area = value; 
    }
}

class Square extends Rectangle {
    constructor(lenght){
        //this.lenght;  -> this will throw an error, because the super is not called yet
        

        // call parent class constructor
        super(height, width); 

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = "Square"; 
        this.lenght = lenght;
    }

    volume(lenght){
        return lenght * this.height * this.width
    }

}

let rectangle = new Rectangle(); 
let square = new Square(2)

square.volume()