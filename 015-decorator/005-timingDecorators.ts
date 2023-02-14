/**
 * src of this timing tutorial:
 * https://www.youtube.com/watch?v=Cos-ctPX5hw
 *
 * To understand this code, first you have to check the method decorator
 * method decorator: used to add feature timing to count the timing process
 *
 * then you can check the calss decorator
 * class decorator: used to add new attribute to the class __timings
 *
 */
import { performance } from "perf_hooks";

// for class decorator
export function logTiming<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  /**
   * Return new class that extends from the original class
   */
  return class extends constructor {
    // add some additional property to the (inserted) class
    __timings = [];
  };
}

// for method decorator
export function timing() {
  /**
   * target: target function
   * -> { getUsers: [Function (anonymous)], getUser: [Function (anonymous)] }
   * propertyKey: function (method) name
   * -> getUser
   * descriptior: the method that you pass into the decorator
   * -> {
   * ->   value: [Function (anonymous)],
   * ->   writable: true,
   * ->   enumerable: true,
   * ->   configurable: true
   * -> }
   */
  return function (
    target: any,
    propertyKey: string,
    descriptor?: TypedPropertyDescriptor<any>
  ): any {
    // get the method
    const originalMethod = descriptor.value;

    /**
     * replace the descriptor.value with our func to add the timing count
     * process
     *
     * @param args: serveral argument
     */
    descriptor.value = async function (...args: any) {
      // start the counting
      const start = performance.now();

      /**
       * run the original function (method that are inserted into timing
       * descriptor)
       *
       * this: object that supposed to be running
       */
      const out = await originalMethod.apply(this, args);

      // end the counting
      const end = performance.now();

      // check the time
      //   console.log(end - start)

      /**
       * check if the instance has timing property, we can add the timing
       * this code doesn't work, because are not define the `this` is an object
       * that has timing property in it
       *
       * -> if (this.__timings) {
       * ->   this.__timings.push({
       * ->       method: propertyKey,
       * ->       time: end - start,
       * ->    });
       * -> } else {
       * ->      console.log(end - start);
       * -> }
       *
       * so we have to define that `this` is an object that has __timings of
       * anknown list
       *
       *    -> if (this as { __timings: unknown[] })
       *
       * then, we can set the __timing inside it and inject our custome timing
       * result
       *
       *    -> (this as { __timings: unknown[] }).__timings {
       *             // inject the timings to our custome timing
       *    ->      (this as { __timings: unknown[] }).push()
       *    -> }
       */

      // if the object has timings
      if ((this as { __timings: unknown[] }).__timings) {
        (this as { __timings: unknown[] }).__timings.push({
          method: propertyKey,
          time: end - start,
        });
      } else {
        console.log(end - start);
      }

      return out;
    };

    /**
     * The return statement for this function is not important, because we are
     * no need the data/value/etc, we just need an additional feature into our
     * original function
     */
    // return descriptor;
  };
}

/**
 * Issue for descriptor parameter
 *
 * if you are not add an optional option to the descriptor parameter, it will
 * resulting an error
 *
 * Unable to resolve signature of method decorator when called as an expression.
 *
 * to solve this problem based on
 * https://stackoverflow.com/questions/37694322/typescript-ts1241-unable-to-resolve-signature-of-method-decorator-when-called-a
 * you just have to add an optional option to the descriptor parameter
 *
 */
