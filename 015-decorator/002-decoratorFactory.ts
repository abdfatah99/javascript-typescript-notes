/**
 * src: https://dev.to/danywalls/decorators-in-typescript-with-example-part-1-m0f
 *
 * Decorator Factory is function that return the decorator itself, the main feature
 * is gives us flexibility to pass parameter to the decorators
 */

/**
 * Base function to give id and property to an object
 * @param ctr: Function
 */
function BasedEntity(ctr: Function) {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleDateString("es-ES");
}

/**
 * Insert Luck number to an object with given limit
 *
 * @param limit
 * @returns
 */
function LuckyNumber(limit: number) {
  return function (constructorParam: Function) {
    constructorParam.prototype.lucky = Math.floor(
      Math.random() * Math.floor(limit)
    );
  };
}

@BasedEntity
@LuckyNumber(3)
class User {
  constructor(public name: string) {}
}

@BasedEntity
@LuckyNumber(5)
class City {
  constructor(public zicode: number) {}
}

let user = new User("fatah") as Record<string, any>;
let bogor = new City(1020) as Record<string, any>;
console.log(user.lucky);
console.log(bogor.lucky);

export {};
