const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]);


// a object is not iterable making, arrays and maps only
for (let key of circle)
    console.log(key);


// we have this Method, we can get all the keys. return an array
for (let key of Object.keys(circle))
    console.log(key);

function Object() {}
const x = {value: 1};
const x = new Object()

Object.keys()

for (let entry of Object.entries(circle))
    console.log(entry);


if ('radius' in circle) console.log('yes');
