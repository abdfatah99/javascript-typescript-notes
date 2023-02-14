function Person(pName) {
  this.name = pName;
}

const fatah = new Person("Fatah");
console.log(fatah);
console.log(fatah.name);
/* 
    with `this` keyword, we can access name variable of the function
    -> make the .name is accessible from the outside of the function
*/

console.log("//////////////////////////////////////////////////////");
/////////////////////////////////////////////////////////////////////

function Mhs(mhsName) {
  let name = mhsName;
  return name;
}

const ria = new Mhs("ria");

// try to access name from outside the function
console.log(ria.name); // undefined

/* 
    why we can't access the name variable in the Mhs function?
    it because name is function scope variable. 

    even if you return the variable -function scope- it will return
    undefined

    function Mhs(mhsName){
        var name = mhsName;
        return name;
    }

    const ria = new Mhs("ria");
    console.log(ria.name); // undefined

    if we access just the instance 
    console.log(ria); // Mhs {}
*/

console.log("//////////////////////////////////////////////////////");
/////////////////////////////////////////////////////////////////////

// HOW TO ACCESS THE NAME VARIABLE OUTSIDE THE FUNCTION?

function student(sName) {
  let studentName = sName;

  this.getName = function () {
    // closure
    return studentName;
  };
}

const hana = new student("hana");
console.log(hana.getName());
