class User {
    public firstName: string
    public lastName: string
    public email: string

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName
        this.lastName = lastName

        if (this.validateEmail()) {
            this.email = email
        } else {
            throw new Error("Invalid email!");
        }
    }

    validateEmail() {
        var re = /S+@S+.S+/;
        return re.test(this.email);
    }

    doSomethingOnUser() {
    }
}
