const mahasiswa = {
  props: "fatah",
  funct: function () {
    return this.props;
  },
};

console.log(mahasiswa.funct());

/*
    this pada program di atas menuruk pada mahasiswa

    perhatikan baik-baik this di strict mode dan non-strict mode

    Value: A property of an execution context (global, function or eval)

    non-strict: is always a reference to an object
    strict: any value

    source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
*/
