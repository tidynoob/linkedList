import node from './node.js';

const linkedList = () => {
    let HEAD = null;
    let length = 0;

    const append = (value) => {
        const newNode = node(value);
        if (HEAD === null) {
            HEAD = newNode;
        } else {
            let current = HEAD;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        length++;
    };

    const prepend = (value) => {
        const newNode = node(value);
        if (HEAD === null) {
            HEAD = newNode;
        } else {
            newNode.next = HEAD;
            HEAD = newNode;
        }
        length++;
    };

    const size = () => {
        return length
    };

    const head = () => {
        return HEAD
    };

    const tail = () => {
        if (HEAD === null) return undefined;
        let current = HEAD;
        while (current.next) {
            current = current.next;
        };

        return current;
    };

    const at = (index) => {
        if (HEAD === null) return undefined;
        let current = HEAD;
        for (let i = 0; i < index; i++) {
            if (current.next) {
                current = current.next;
            } else {
                return undefined
            }
        }

        return current;
    };

    const pop = () => {
        if (HEAD === null) return null;
        let current = HEAD;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        };
        previous.next = null;
        length--;
        return length;
    };

    const contains = (value) => {
        if (HEAD === null) return false;
        let current = HEAD;
        if (current.value === value) return true;
        while (current.next) {
            current = current.next;
            if (current.value === value) return true;
        };
        return false;
    }

    const find = (value) => {
        if (HEAD === null) return undefined;
        let current = HEAD;
        let index = 0;
        if (current.value === value) return index;
        while (current.next) {
            current = current.next;
            index++;
            if (current.value === value) return index;
        };
        return undefined;
    };

    const toString = () => {
        if (HEAD === null) return '';
        let current = HEAD;
        let string = `(${current.value})`;
        while (current.next) {
            current = current.next;
            string += ` -> (${current.value})`;
        };

        return string;
    };

    const insertAt = (index, value) => {
        if (index > length) return undefined;
        if (index === 0) {
            prepend(value);
            length++;
            return length;
        }
        let current = HEAD;
        for (let i = 0; i < index; i++) {
            if (i === index - 1) {
                const newNode = node(value);
                newNode.next = current.next;
                current.next = newNode;
                length++;
                return length;
            }
            current = current.next;
        }
    };

    const removeAt = (index) => {
        if (index > length) return undefined;
        if (index === 0) {
            HEAD = HEAD.next;
            length--;
            return length;
        };
        let current = HEAD;
        for (let i = 0; i < index; i++) {
            if (i === index - 1) {
                current.next = current.next.next;
                length--;
                return length;
            }
            current = current.next;
        }
    };



    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };

};

const test = linkedList();

test.append(1);
test.append(2);
test.append(3);
test.append(4);
test.append(5);
console.log(test.toString());

test.pop();
console.log(test.toString());

test.removeAt(2);
console.log(test.toString());

test.insertAt(2, 3);
console.log(test.toString());


// linkedList.append(1);

// console.log(test.head());
// console.log(test.tail());
// console.log(test.at(0));
// console.log(test.size());
// console.log(test.toString());
// console.log(test.contains(3));
// console.log(test.find(3));