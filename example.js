var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function greeter(person) {
    return "Hello " + person;
}
var user = "Harish";
var n = 0;
var flag = false;
var hex = 0x0000;
var arr = [1, 2, 3, 4, 5];
//.........................................
console.log("Array : ");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(greeter(user));
console.log("Hex: " + hex++);
console.log("Boolean: " + flag);
function area(squareDim) {
    return squareDim.width * squareDim.height;
}
var myObj = { width: 20, height: 15 };
console.log("Area of rectangle: " + area(myObj));
//..............................................	
var Shapes = (function () {
    function Shapes(a) {
        this.area = a;
    }
    Shapes.prototype.show = function () {
        console.log("Area: " + this.area);
    };
    return Shapes;
}());
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(w, h) {
        var _this = _super.call(this, w * h) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    Square.prototype.show = function () {
        console.log("Square");
        console.log("Width : " + this.width + ", Height: " + this.height);
        _super.prototype.show.call(this);
    };
    return Square;
}(Shapes));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this, 3.14 * r * r) || this;
        _this.radius = r;
        return _this;
    }
    Circle.prototype.show = function () {
        console.log("Circle");
        console.log("Radius: " + this.radius);
        _super.prototype.show.call(this);
    };
    return Circle;
}(Shapes));
var sq = new Square(4, 6);
var cir = new Circle(5);
