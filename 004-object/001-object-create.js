// src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// The Object.create() method creates a new object, 
//  -> using an existing object as the prototype of the newly created object.

const Person = {
    isHuman: false, 
    printIntroduction: function(){
        console.log(`My name is ${this.name}. My id-number ${this.nim}`)
    //  about this keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this 
    }
}; 

// creating student as person object
// similiar with inheritance (but need exploration more)
const student = Object.create(Person);

student.isHuman = true; 
student.name = "abdul fatah"; 
student.nim = 1803015235; 

console.log(student);