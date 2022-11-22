//Arrays: simplest forms of data structures

const strings = ["a", "b", "c", "d"];

console.log(strings);

//go to a position in strings
console.log(strings[2]);

//push: adds to the end of the array, o(1) operation

strings.push("p");
console.log(strings);

//pop: pops off the end of the array, O(1) operation
strings.pop();
strings.pop()
console.log(strings)

//add an item to the beginning of the array O(n)
strings.unshift("x");
console.log(strings);

//go index 2, delete n + 1 elements at index 2, add elements: O(n)
strings.splice(2, 0, "Allison");
console.log(strings)

//Implementation
class List {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
    }
    pop() {
        const retVal = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return retVal;
    }

    delete(index) {
        const retVal = this.data[index - 1];
        this.shiftItems(index);
        return retVal;
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new List();
newArray.push("Hello"); 
newArray.push("Hello");
newArray.push("Hello"); 
newArray.push("Hello");
console.log(newArray);
newArray.delete(0);
console.log(newArray);
newArray.delete(0);
console.log(newArray);
newArray.delete(0);
console.log(newArray);