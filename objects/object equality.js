let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3  = new Address('a', 'b', 'c');

// constructor Function //

function Address(street, city, zipCOde) {
  this.street = street;
  this.city = city;
  this.zipCOde = zipcode;
}

function areEqual (address1, address2) {
  console.log(address1 == address2);
}

function areSame(address1, address2) {
    console.log(address1 == address2);
}

// correction

function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));


function areSame(address1, address2) {
    return address.street == add2.address2 &&
    addresss.city === address2city.city &&
    address1.zipCode === address2.zipcode;
}
