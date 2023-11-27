const person = {
  firstName: 'jeff',
  lastName: 'jabu',
  // fullName: function() {},
  fullName() {
    return `${person.firstName}${person.lastName}`
  }
};


console.log(person.fullName())

// getters => access prop
// setters => change (mutate) them

const person = {
  firstName: 'jeff',
  lastName: 'jabu',
  // fullName: function() {},
  get fullName() {
    return `${person.firstName}${person.lastName}`
  }
  set fullName(value){
    consy part = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];

  }
};

person.fullName = 'Jabu nxumalo
';
