/**
 * src: https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e
 *  property decorator - decorator (function) for class property
 *  
 * gets constructor function & name of the property AS parameters. 
 * we can do
 * - change the default definition
 * - modify object instance (add new property, change data)
 * */ 


/**
 * example situation
 * decorator: check the min value
 *    if (min) continue
 *    else Error 'property with a message'
 */

// define the decorator
function Min(limit: number){

  /**
   * this return function will automatically run if you call the Min function 
   * decorator 
   * 
   * @param target: {}
   * @param propertyKey: password
   */
  return function(target: Object, propertyKey: string){
    console.log(target, propertyKey)

    let value: string;

    // getter property to return the value
    const getter = function(){
      return value
    }

    // setter set the value of property when using it and handle the validation
    const setter = function (newValue: string){
      if (newValue.length < limit){
        Object.defineProperty(target, 'errors', {
          value: `Your password should be bigger than ${limit}`
        })
        // target: instance of the object
      }
      else {
        value = newValue;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })

  }
}

class User {
  username: string;

  @Min(8)
  password: string; // this property will goes into Min function as propKey

  constructor(username: string, password: string){
    this.username = username;
    this.password = password
  }
}

let fatahUser = new User("fatah", "123") as Record<string, any>
console.log(fatahUser)
console.log(fatahUser.errors)

//==============================================================================
console.log("================== another example ===================")

const printMemberName = (target: any, memberName: string) => {
  console.log(`Member Name (second parameter): ${memberName}`)
}


class Example {
  @logger
  name: string; // object property
  stdClass: string; // object property
  // insert these two object property into the decorator function

  constructor(name: string, stdClass: string) {
    // object property name of this class is name that inserted during instantiation
    this.name = name;
    this.stdClass = stdClass;
  }

  /**
   * so the actual happend is:
   * insert the [name, stdClass] of Example class instance into logger function. 
   * 
   * instance of Example function has: 
   *    { name: value, stdClass: value }; ex { name : "Abdul Fatah", stdClass: "10"}
   * 
   * so when you have a function decorator 
   * 
   * -> function logger(target: any, key: any){}
   * 
   * instanciated object going inside into the logger function as parameter
   * question is: 
   *    How to define the first and second argument of the logger function
   */
}

function logger(target: any, key: any) {
  console.log(`target: ${JSON.stringify(target)}`)
  console.log(`key: ${key}`)
  // target: {}
  // key: object key -> name

  let value: string;

  // set the object property
  const setter = (newValue: string) => {
    // newValue : "Abdul Fatah"
    console.log(`Setting value for ${key} to ${newValue}`);
  };

  Object.defineProperty(target, key, {
    // set only takes 1 argument (the value being assigned to the property)
    set: (newValue) => {
      value = newValue;
      console.log(`New Value inside define property func: ${newValue}`)
      console.log(`key: ${key}; value: ${newValue}`)
    }
  })
}

const fatah = new Example("Abdul Fatah", "10");
console.log(fatah.name)
