class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(element) {
        if (typeof element == 'number') {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size++;
        }
    }

    remove(index) {
        if (index < this.numbers.length && index >= 0){
            this.numbers.splice(index, 1);
            this.numbers.sort((a, b) => a - b);
            this.size--;
        }
    }

    get(index) {
        if (index < this.numbers.length && index >= 0){
            this.numbers.sort((a, b) => a - b);
            return this.numbers[index];
        }
    }
}
