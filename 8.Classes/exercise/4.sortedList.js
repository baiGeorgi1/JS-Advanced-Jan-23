class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }

    add(num) {
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    };
    remove(index) {
        if (index >= this.size || index < 0) {
            throw new Error('Ivalid index');
        } else {
            this.arr.splice(index, 1);
            this.size = this.arr.length;
        };
    };
    get(index) {
        if (index >= this.size || index < 0) {
            throw new Error('Ivalid index');
        } else { return this.arr[index]; };
    };
}



let list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
