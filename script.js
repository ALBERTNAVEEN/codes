// console.log("poly");
/**
 * polymorphism : ability to have more than one form
 * overriding of function 
 * 
 * encapsulation : Car is the best example where all engine on start gearbox process 
 * abstraction:making a phone call button is clicked backend process we dont know 
 */

class Anniyan{
    constructor(){

    }
    sum(num1,num2){
        console.log("This is from class A:", num1 + num2 );
    }
}
class B extends Anniyan{
    constructor() {
        super();
    }
  
    sum(num3,num4){
        console.log("This is from class B:",num3+num4)
    }
}

const anniyan = new B();
anniyan.sum(15,54); 
/**above example is said to be for single inheritance
 *  
 * 
 */

/**
 * Multi-level inheritance
 * 
 */
class A{
    constructor(){

    }
    sum(num1,num2){
        console.log("This is from class A:", num1 + num2 );
    }
}
class E extends A{
    constructor() {
        super();
    }
  
    sum(num3,num4){
        console.log("This is from class E:",num3+num4)
    }
    subtract(x,y){
        console.log("difference between two numbers:",x-y)
    }
}

class C extends E{
    constructor(){
        super();
    }
    sum(x,y=0){
        console.log("This is from class C:",x+y);
    }
}
const a = new C();
a.sum(10,90);
a.subtract(100,10000);


//it shows error NAN because x takes 10 as value
// where y will not have an value it takes an undefined 
//10+undefined shows NAN
//so to avoid that confusion
//declare pass a argument y=0 default value


/**
 * hybrid inheritance is said to be combination of more than one form
 * multiple :js doesnot support one children with many parent classes
 */