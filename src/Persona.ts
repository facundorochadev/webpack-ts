export default class Persona {
    private firstName:string
    private lastName:string

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName():string {
        return this.firstName + ' ' + this.lastName
    }

    getFirstName():string {
        return this.firstName
    }

    getLastName():string {
        return this.lastName
    }
}

const a:Persona = new Persona('John', 'Doe');
console.log(a.getFirstName());