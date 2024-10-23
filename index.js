const personInfo = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    children: "Alice",
    pets: "Dog-Duke",
};

const resultArray = [];

    for (const key in personInfo) {
        const value = personInfo[key];

        const keyValuePair = {};
        keyValuePair[key] = value;

        resultArray.push(keyValuePair);
    }

console.log(resultArray);