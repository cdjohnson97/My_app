const Person = {
    name: 'Johnson',
    prenom: 'Darlon',
    age: '44ans'
}

const { name, prenom: firstName, age } = Person

const sayHi = (...args) => {
    if (Person.name) {
        console.log(`Hello my name is ${name} and my firstName is ${firstName}`)

    }
}

sayHi([name, firstName])