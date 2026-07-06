class DequeNode {
    value: number;
    next: DequeNode | null = null;
    prev: DequeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class MyDeque {
    private head: DequeNode | null = null;
    private tail: DequeNode | null = null;

    constructor() {
        // Initializes an empty queue
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newNode = new DequeNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newNode = new DequeNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode
            this.head = newNode;
        }
    }

    /**
     * @return {void}
     */
    pop(): number {
        if (this.isEmpty()) {
            return -1;
        }
        const removedValue = this.tail!.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }
        return removedValue;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) {
            return -1;
        }
        const removedValue = this.head!.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head!.next;
            this.head!.prev = null;
        }
        return removedValue;
    }
}
