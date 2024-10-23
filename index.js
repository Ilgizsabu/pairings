
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    children: "Alice",
    pets: "Dog-Duke",
}

const newArray = [];

for (const key in obj) {
    const value = obj[key];

    const newObj = {};
    newObj[key] = value;

    newArray.push(newObj);

}