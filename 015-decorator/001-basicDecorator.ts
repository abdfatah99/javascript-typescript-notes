/**
 * Decorator is a function that we can hook into our code, to extend with
 * some behaviour and help us to write code abstraction
 * src: https://dev.to/danywalls/decorators-in-typescript-with-example-part-1-m0f 
 * 
 * Decorator is language feature by js (another language also provide the same
 * feature), and not tied to OOP (but lots of OOP use it).
 * 
 * Decorator Syntax
 * 
 *    @expression
 * 
 * expression is a function that will be run automatically during runtime, 
 * with detail about the target of the decorator.
 * 
 * The target of decorator depends on WHERE YOU ADD THEM. currently decorator 
 * can be added to the following component of a class:
 *  - Class Declaration
 *  - Method 
 *  - Accessor
 *  - Property
 *  - Parameter
 *
 * simply you can mean by this
 * "This is the way you can inject (modify) a function A or class A
 *  with function B"
 * 
 * code example
 * 
 *    @classDecorator
 * -> class Person{
 *        @propertyDecorator
 * ->     public name: string;
 * ->     
 *        @accessorDecorator
 * ->     get fullName() {
 *             //...
 * ->     }
 * 
 *        @methodDecorator
 * ->     printName(@parameterDecorator prefix: string){
 *             //...
 * ->     }
 * -> }
 * 
 * add multiple decorator 
 * 
 *    @decoratorA
 *    @decoratorB
 * -> class Person{}
 * 
 * basic term
 * src: https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/
 * 
 * -> const classDecorator = (target: Function) => {
 * ->     // do something with your class
 * -> }
 * 
 * -> @classDecorator
 * -> class Rocket{}
 * 
 * Function decorator parameter
 * 
 * -> function decoratorName(
 * ->   target: Type,
 * ->   key/propertyKey: Type,
 * ->   descriptor: Type // for method decorator
 * -> ) 
 * 
 *  explanation: 
 *    - target: target is your things (class, method, property) that you're inserted
 *              into the decorator
 *    - key/propertyKey: is the name of things that you're inserted
 * 
 *    // for method decorator
 *    - description: use to get the method and the method is store at 
 * 
 *                   -> description.value
 * 
 */

/**
 * Class Decorator
 * 
 *  - inject new things into our class 
 * 
 * Takes Constructor function as a PARAMETER
 *    |- this mean we can change the way the class initialized
 * 
 * 
 */

// example without decorator
class BaseEntity {
  readonly id: number;
  readonly created: string;

  constructor() {
    this.id = Math.random();
    this.created = new Date().toLocaleDateString();
  }
}

// extends the BaseEntity class
class Course extends BaseEntity{
  constructor(public name: string){
    // takes parent property
    super()
  }
}

let englishCourse = new Course("English");
console.log(
  `course name: ${englishCourse.name},
   id: ${englishCourse.id},
   created at: ${englishCourse.created}`)

// solve using decorator
// decorator class is a function and gets the constructor as parameter, 
// include the id and created properties

function BaseEntityFunc(ctr: Function){
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString("es-ES")
}

@BaseEntityFunc
class User {
  constructor (public name: string){}
}

@BaseEntityFunc
class City {
  constructor (public zicode: string) {}
}

// with decorator you don't need to modify the constructor or extend, only need
// @Entity before the class definition

let user = new User("Fatah") as Record<string, any>
let bogor = new City("F") as Record<string, any>
console.log(user.id)
console.log(bogor.id)



// =============================== another example =============================

console.log("======== main function with Prop ========")

// example 1 - class decorator
// addFuelToRocket= higher order function
// expecting constructor function as the parameter
// or you can just use any as target type
//    -> const addFuelToRocket = (target: any) => {}

const addFuelToRocket = (target: new () => any) => {
  return class extends target {
    fuel = 100;
  }
}

@addFuelToRocket
class RocketWithoutProp {}

const rocketWithoutProp = new RocketWithoutProp() as Record<string, any>
console.log(rocketWithoutProp.fuel)
// 100

/**
 * why should add Record<string, any>?
 * 
 * first, typescript will check the property object of Rocket class instance, 
 * because we are not declaring the property: fuel in the Rocket class, typescript
 * will deny the program to run. 
 * 
 * to solve this problem, you have to define the additional property that might
 * be exist in the Rocket class using
 *    -> Record<string, any>
 * 
 * or you can implicitly set the property by declaring inside the Rocket class
 *    -> class Rocket {
 *    ->    fuel: number
 *    -> }
 */

console.log("======== main function wihtout Prop ========")

@addFuelToRocket
class RocketWithProp{
  fuel: number;
}

const rocketWithProp = new RocketWithProp()
console.log(rocketWithProp.fuel)
// 100

export {}