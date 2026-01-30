"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_ts_1 = require("./node.js");
const types_ts_1 = require("./types.js");
class LinkedList {
    constructor(unique) {
        this.head = null;
        this.unique = unique;
    }
    toString() {
        let current = this.head;
        const nodes = [];
        while (current !== null) {
            if (current !== null && current === this.head) {
                nodes.push(`[ HEAD: ${current.data} ]`);
            }
            else if (current.next_node === null) {
                nodes.push(`[ TAIL: ${current.data} ]`);
            }
            else {
                nodes.push(`[ ${current.data} ]`);
            }
            current = current.next_node;
        }
        return nodes.length !== 0 ? nodes.join('-> ') : '[ No Data ]';
    }
    is_empty() {
        return this.head === null;
    }
    size() {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next_node;
        }
        return count;
    }
    is_unique(key) {
        let current = this.head;
        let position = 1;
        while (current !== null && position <= this.size()) {
            if (current !== null && key === current.data) {
                return false;
            }
            position++;
            current = current.next_node;
        }
        return true;
    }
    check_index(index) {
        if (index > this.size()) {
            throw new RangeError('Index out of linked list range.');
        }
        else if (index < 0) {
            throw new RangeError('Negative indexes are not allowed in linked lists.');
        }
    }
    find(key) {
        let current = this.head;
        while (current !== null) {
            if (current !== null && key === current.data) {
                return current;
            }
            current = current.next_node;
        }
        return null;
    }
    search(index) {
        this.check_index(index);
        if (index === 0) {
            return this.head;
        }
        else if (index > 0) {
            let current = this.head;
            let position = index;
            while (current !== null && position > 0) {
                current = current.next_node;
                position--;
            }
            return current;
        }
        else {
            return null;
        }
    }
    add(data) {
        if (this.unique && !this.is_unique(data)) {
            throw new types_ts_1.ValueError('Value should be unique.');
        }
        const new_node = new node_ts_1.Node(data);
        new_node.next_node = this.head;
        this.head = new_node;
        return;
    }
    insert(data, index) {
        this.check_index(index);
        if (this.unique && !this.is_unique(data)) {
            throw new types_ts_1.ValueError('Value should be unique.');
        }
        if (index === 0) {
            this.add(data);
        }
        else if (index > 0) {
            const new_node = new node_ts_1.Node(data);
            let current = this.head;
            let position = index;
            while (current !== null && position > 1) {
                current = current.next_node;
                position--;
            }
            const prev_node = current;
            const next_node = current.next_node;
            prev_node.next_node = new_node;
            new_node.next_node = next_node;
            return;
        }
    }
    remove(index) {
        this.check_index(index);
        if (index === 0) {
            return this.unhead();
        }
        else if (index > 0) {
            let current = this.head;
            let position = index;
            while (current !== null && position > 1) {
                current = current.next_node;
                position--;
            }
            const prev_node = current;
            const deleted = current.next_node;
            prev_node.next_node = deleted.next_node;
            return deleted;
        }
        else {
            return null;
        }
    }
    delete(key) {
        let current = this.head;
        let previous = null;
        let found = false;
        while (current !== null && !found) {
            if (key === current.data && current === this.head) {
                this.head = current.next_node;
                found = true;
            }
            else if (key === current.data) {
                previous.next_node = current.next_node;
                found = true;
            }
            else {
                previous = current;
                current = current.next_node;
            }
        }
        return current;
    }
    unhead() {
        if (this.is_empty()) {
            return null;
        }
        const current = this.head;
        this.head = current.next_node;
        return current;
    }
    untail() {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.next_node === null) {
                previous.next_node = null;
            }
            previous = current;
            current = current.next_node;
        }
        return current;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linkedlist.js.map