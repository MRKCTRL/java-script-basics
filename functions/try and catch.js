const person = {
  firstName: 'jeff',
  lastName: 'jabu',
  set fullName(value){
    // const e - new Error();
    if (typeof value !== 'string') //return;
        throw new Error('Value is not a string.');


    const part = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a first and last name')
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
try {
  person.fullName = 'Jabu nxumalo';
}
catch (e) {
  console.log(e);
  // alert() very old and poor
  alert(e);
}

console.log(person);
