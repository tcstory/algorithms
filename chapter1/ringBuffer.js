// 环形缓冲区

const Node = require('./node');

function RingBuffer(capacity = 5) {
    this._capacity = capacity;
    this._size = 0;

    let node = new Node();
    this._read = node;
    this._write = node;

    let pointer = node;
    for (let i = 0, len = capacity - 1; i < len; i++) {
        let node = new Node();
        pointer.next = node;
        pointer = node;
    }
    pointer.next = this._read;
}

RingBuffer.prototype.isEmpty = function () {
    return this._size === 0;
};

RingBuffer.prototype.isFull = function () {
    return this._capacity === this._size;
};

RingBuffer.prototype.write = function (data) {
    if (!this.isFull()) {
        this._write.val = data;
        this._write = this._write.next;
        this._size++;
        return true;
    } else {
        return false;
    }
};

RingBuffer.prototype.read = function () {
    if (!this.isEmpty()) {
        let val = this._read.val;
        this._read.val = null;
        this._read = this._read.next;
        this._size--;
        return val;
    } else {
        return null;
    }
};

module.exports = RingBuffer;
