function extractNameandStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}


const person = {
  name: 'Mithun',
  age:23,
  address: {
    street: 'BB,Block B,Industrial Area',
    city: 'Sector 62 Noida',
    state: 'Utter Predesh'
  }
};

const { name, street } = extractNameandStreet(person);

console.log(name); 
console.log(street); 
