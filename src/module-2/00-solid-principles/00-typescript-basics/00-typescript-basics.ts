// TODO: Basics

let hello = 'Hello Captain'

let helloWorld: string = 'Hello Captain';
let subscribers: number = 12

// TODO: Classes, Types, interfaces, typechecking, Polymorphisme, Heritage

class UserAccount {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    greeting() {
        return 'Sak Pasé les captains !!!'
    }
}

/*
const userAccount: UserAccount = new UserAccount('Captain', 63)
userAccount

const greeting = userAccount.greeting()
greeting

const captainName = userAccount.name
captainName


userAccount.name = 'toto'
const newName = userAccount.name
newName
*/
type UserAccountType = {
    name: string
    id: number
}

const accountType: UserAccountType = {
    name: 'name',
    id: 123
}

interface AuthenticationInterface {
    login: () => void;
    signup: () => void;
}

class Authentication implements AuthenticationInterface {
    constructor() {
    }

    login(): void {
    }

    signup(): void {
    }
}

interface VehiculeInterface {
    startEngine: () => string
}

abstract class Car implements VehiculeInterface {
    engine: string;

    protected constructor(engine: string) {
        this.engine = engine
    }

    startEngine(): string {
        return 'Engine started'
    }
}

class Ferrari extends Car {
    constructor(engine: string) {
        super(engine);
    }

    startEngine(): string {
        return 'Ferrari Engine started'
    }
}

class Lambo extends Car {
    constructor(engine: string) {
        super(engine);
    }
    startEngine(): string {
        return 'Lambo Engine started'
    }
}

const ferrari = new Ferrari('v8')
console.log(ferrari.startEngine())

const lambo = new Lambo('v12')
console.log(lambo.startEngine())

const cars: VehiculeInterface[] = [
    new Lambo('v12'),
    new Ferrari('v8')
]

for(let car of cars){
    console.log(car.startEngine())
}
