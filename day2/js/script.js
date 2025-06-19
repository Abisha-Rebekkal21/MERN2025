function greeting(){
    console.log("Hello!");
}

var name=()=>{
    console.log("Abisha");
}

greeting();
name();

var num=12;
result= (num%2===0) ? "Even" : "Odd";
console.log(`${num} is ${result} number`);

//spread operator(...)
var arr1 = [10, 20, 30];
var arr2 = [...arr1, 40, 50];
console.log("arr1: ",arr1);
console.log("arr2: ",arr2);


//Destructuring Operator
var marks = [90,91,92,93,94];
var [m1, m2, m3, m4, m5] = marks;
console.log(m1," ", m5);

//call back function
function fun1(){
    console.log("Hello World!");
}
var fun2 = (fun)=>{
    fun();
    console.log("Hello again!");
}
fun2(fun1);

//map-take each element from array
var arr=[1, 2, 3, 4, 5];
var double = arr.map(num=>num*2);
console.log("Doubled Array: ",double);

//filter
var odd = arr.filter(num => num%2!==0);
console.log("Filter odd Array: ",odd);

//rreduce
var total = arr.reduce((val,num)=>val+num,0);
console.log("Array Total: ",total);

var com= arr.map(num=>num*2).filter(num=> num>=5).reduce((val,num)=>val+num,0);
console.log(com);