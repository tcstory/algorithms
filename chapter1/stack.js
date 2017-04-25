const Node = require('./node');

function Stack() {
    this._top = null;
    this._n = 0;
}

Stack.prototype.isEmpty = function () {
    return this._n === 0;
};

Stack.prototype.size = function () {
    return this._n;
};

Stack.prototype.push = function (val) {
    let old = this._top;
    this._top = new Node(val);
    this._top.next = old;
    this._n += 1;
};

Stack.prototype.pop = function () {
    if (!this.isEmpty()) {
        let old = this._top;
        this._top = old.next;
        this._n--;
        return old.val;
    }
};

Stack.prototype.peek = function () {
    if (!this.isEmpty()) {
        return this._top.val;
    } else {
        return null;
    }
};

Stack.prototype.toString = function () {
    if (this.isEmpty() === 0)  {
        return "BOTTOM [] TOP";
    } else {
        let pointer = this._top;
        let result = [];
        while (pointer) {
            result.unshift(pointer.val);
            pointer = pointer.next;
        }

        return  `BOTTOM [${result.join(',')}] TOP`;
    }
};

module.exports = Stack;