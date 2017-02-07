function greeter(person:string) {
    return "Hello " + person;
}

var user = "Harish";
let n:number = 0;
let flag:boolean = false;
let hex: number = 0x0000;
let arr: number[] = [1,2,3,4,5];

//.........................................

console.log("Array : ");
for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}

console.log(greeter(user));

console.log("Hex: " + hex++);
console.log("Boolean: " + flag);

//.........................................

interface Dimension{
	width: number;
	height: number;
}

function area(squareDim: Dimension) {
   return squareDim.width*squareDim.height;
}

let myObj = {width:20, height:15};
console.log("Area of rectangle: "+area(myObj));

	
//..............................................	

class Shapes {
	area:number;
	constructor(a:number){
		this.area = a;
	}
	show() {
        console.log(`Area: ${this.area}`);
    }
}


class Square extends Shapes{
    width: number;
    height: number;
    
    constructor(w:number, h:number) {
        super(w*h);
        this.width = w;
        this.height = h;
        
    }

    show() {
    	console.log(`Square`);
        console.log(`Width : ${this.width}, Height: ${this.height}`);
        super.show();
    }
    
}


class Circle extends Shapes{
    radius: number;
    
    constructor(r:number) {
    	super(3.14*r*r);
        this.radius = r;
        
    }

    show() {
    	console.log(`Circle`);
        console.log(`Radius: ${this.radius}`);
        super.show();
    }
    
}

let sq = new Square(4, 6);
let cir = new Circle(5);