/// <reference path='a.ts' />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
// import circle = Shape.circle
// console.log(circle(1));
console.log(Shape.square(1));
console.log(Shape.circle(1));
