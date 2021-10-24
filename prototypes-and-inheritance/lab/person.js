function getPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        fullName: ''
    };

    Object.defineProperty(person, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first && last) {
                this.firstName = first;
                this.lastName = last;
            }

        },
        enumerable: true,
        configurable: true
    })

    return person;
}