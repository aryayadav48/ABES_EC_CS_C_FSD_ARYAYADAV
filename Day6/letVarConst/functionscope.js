function fun(){
     var a=20;
     let b=30;
     const pi=3.14;
     console.log("value of a inside the block scope:",a);
     console.log("value of b inside the block scope:",b);
     console.log("value of pi inside the block scope:",pi);
}
fun();
    console.log("outside the block:");
    console.log("value of a outside the block scope:",a);
    console.log("value of b outside the block scope:",b); // error
    console.log("value of pi outside the block scope:",pi); // error