let address = {
  street: 'a',
  city: 'c',
  zipCOde: 'c'
  getfulladdress() {
    return this.city, + ' ', this.zipCOde + ' ' + this.street;
  },
};

console.log(adress.getfulladdress)


function Address(street, city, zipCOde) {
  this.street = address;
  this.city = city;
  this.zipCOde = zipCOde;
}


let address = createAddress('a', 'b', 'c');
// factory function
function creatAdress(street, city, zipcode) {
  return {
    street,
    city,
    zipCOde
  };
}

let addresss mew Address('a', 'b', 'c')

// constructor function
function Address(street, city, zipCOde){
    this.street  = street;
    this.city  = city;
    this.zipCOde  = zipCOde;
}
