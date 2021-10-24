class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }

    }

    toString() {
        let result = '';
        for (let i = 0; i < this.innerLength; i++) {
            if (i < this.innerString.length) {
                result += this.innerString[i];
            }
        }
        if (this.innerString.length > this.innerLength) {
            result += '...'
        }

        return result;
    }
}