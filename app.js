const Person = {
    name: 'Johnson',
    prenom: 'Darlon',
    age: '44ans',

    familyMembers: [
        { name: 'Mom', prenom: 'pulcherie', type: 'P' },
        { name: 'Dad', prenom: 'Alfred', type: 'P' },
        { name: 'Sis', prenom: 'Michka' },
        { name: 'wife', prenom: 'Hora' },
    ],

    sayHi() {
        console.log(`Hello my name is ${this.name} my father's name is ${this.familyMembers[1].prenom}`)
    },

    getFamilyMembers() {
        return this.familyMembers
    }
}

const { name, prenom: firstName, age } = Person


Person.sayHi()
const family = Person.getFamilyMembers()


family.forEach(member => {
    console.log(member.name, member.prenom)
})

console.log('-----------------------------')
const countMembers = (...args) => {
    args.forEach(items => console.log(items.name, items.prenom))
}

countMembers(...family)

console.log('--------------Mom and Dad------------ ')

family.map(momAndDad => {
    if (momAndDad.type === 'P') {
        console.log(momAndDad.prenom)
    }
})
