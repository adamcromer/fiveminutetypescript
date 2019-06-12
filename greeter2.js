function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Adam", lastName: "Cromer" };
console.log(greeter(user));
