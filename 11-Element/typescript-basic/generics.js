var _a;
function echo(arg) {
    return arg;
}
var result = echo(true);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result2 = swap(['string', 123]);
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str = echoWithLength('str');
var obj = echoWithLength({ length: 10, width: 10 });
var arr2 = echoWithLength([1, 2, 3]);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
console.log((_a = queue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
var kp1 = { key: 1, value: "string" };
var kp2 = { key: 'str', value: 2 };
var arr = [1, 2, 3];
var arrTwo = [1, 2, 3];
