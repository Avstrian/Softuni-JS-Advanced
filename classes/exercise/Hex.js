class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexValue = this.value.toString(16).toUpperCase()
        return `0x${hexValue}`
    }

    plus(number) {
        return new Hex(this.value + number)
    }

    minus(number) {
        return new Hex(this.value - number)
    }

    parse(string) {
        return parseInt(string, 16)
    }
}