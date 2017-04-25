const Node = require('./node');

function Queue() {
    this._first = null;
    this._last = null;
    this._n = 0;
}

Queue.prototype.isEmpty = function () {
    return this._n === 0;
};

Queue.prototype.size = function () {
    return this._n;
};

Queue.prototype.enqueue = function (val) {
    let old = this._last;
    this._last = new Node(val);
    this._last.next = old;

    if (this.isEmpty()) {
        this._first = this._last;
    } else {
        old.next = this._last;
    }
    this._n++;
};

Queue.prototype.dequeue = function () {
    while (!this.isEmpty()) {
        let old = this._first;
        this._first = old.next;
        this._n--;

        if (this.isEmpty()) {
            this._last = null;
        }
    }
};

Queue.prototype.toString = function () {
    if (this.isEmpty()) {
        return "HEAD [] TAIL";
    } else {
        let pointer = this._first;
        let result = [];

        while (pointer) {
            result.push(pointer.val);

            if (pointer === this._last) {
                break
            } else {
                pointer = pointer.next;
            }
        }
        return `HEAD [${result.join(',')}] TAIL`;
    }
};

module.exports = Queue;