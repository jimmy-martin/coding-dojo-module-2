class Email {
    public email: string;

    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }

    validateEmail(email: string) {
        const re = /S+@S+.S+/;
        return re.test(email);
    }
}

class User {
    public firstName: string
    public lastName: string
    public email: Email

    constructor(firstName: string, lastName: string, email: Email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }

    doSomethingOnUser() {
        // ...
    }
}
