function getPerson(person) {
    if (typeof person !== "object" || !person.name || !person.age) {
        throw new Error("Invalid parameter type");
    }

    return `Name: ${person.name}, Age: ${person.age}`;
}

try {
    // valid person details
    const personOne = {
        name: "John Wick",
        age: 35,
    };
    const output = getPerson(personOne);
    console.log(output);

    // invalid person details
    const personTwo = {
        firstName: "John",
        lastName: "Wick",
    };
    const invalidOutput = getPerson(personTwo);
    console.log(invalidOutput);
} catch (error) {
    console.log(error.message);
}
