'use strict';

class Queue {
    //  creating a queue of length = lengthOfQueue
    // creating a new array of the length provided
    // setting up head and tail values. Head value will determine location of pop and tail value will determine location of push. 
    // countOfItems keeps a count of number of items in the array at a given time.
    constructor(lengthOfQueue) {
        this.lengthOfQueue = this.verifyLengthInput(lengthOfQueue);
        this.head = 0;
        this.tail = 0;
        this.countOfItems = 0;
        this.queue = new Array(this.lengthOfQueue);
    }

    verifyLengthInput(lengthOfQueue) {
        /** 
        * Verify the lengthOfQueue provided is an integer.
        * @param {integer} lengthOfQueue
        * @return {integer}
        */
        if (!(Number.isInteger(lengthOfQueue))) {
            throw new Error("Only accept integer as length");
        }
        return lengthOfQueue;
    }

    push(value) {
        /** 
        * Pushing value onto the queue
        * If queue is full and head===tail, an error is thrown as no more additions to the queue is allowed. 
        * The tail value is reset to zero once it equals lengthOfQueue.
        * @param {any} value
        * @return {array}
        */
        if (this.tail === this.head && this.countOfItems === this.lengthOfQueue) {
            throw new Error ("Error");
        }
        this.queue[this.tail] = value;
        this.countOfItems += 1;
        this.tail += 1;
        this.tail === this.lengthOfQueue ? this.tail = this.tail % this.lengthOfQueue : this.tail;
        return this.queue;
    }

    pop() {
        /** 
        * Popping values from a queue
        * If queue is empty, and head === tail an error is thrown as no more removals from the queue are allowed. 
        * The head value is reset to zero once it equals lengthOfQueue.
        * @return {any}
        */
        if(this.head === this.tail && this.countOfItems === 0) {
            throw new Error ("Error");
        }
        let poppedValue = this.queue[this.head];
        this.queue[this.head] = null;
        this.head += 1 ;
        this.head === this.lengthOfQueue ? this.head = this.head % this.lengthOfQueue : this.head;
        this.countOfItems -= 1;
        return poppedValue;
    }

    print() {
        /** 
        * printing the queue
        * @return {array}
        */
        return this.queue;
    }

    size() {
        /**
        * checking length of queue
        * @return {integer}
        */
        return this.queue.length;
    }

    createQueue(listOfValues) {
        /**
        * Add values to the empty queue till it is full, from a list of values provides.
        * This function is used for testing.
        * @return {array}
        */
        for (let i = 0; i < this.lengthOfQueue; i++) {
            this.queue[i] = listOfValues[i];
            this.countOfItems += 1;
        }
        return this.queue;
    }

    emptyQueue() {
        /**
        * Empty the queue.
        * This function is used for testing.
        * @return {array}
        */
        for (let i = this.countOfItems; i > 0; i--) {
            this.queue[this.head] = null;
            this.head += 1;
            this.head === this.lengthOfQueue ? this.head = 0 : this.head;
        }
        return this.queue;
    }

}

module.exports = {Queue};