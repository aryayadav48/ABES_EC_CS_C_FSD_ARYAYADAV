console.log(isODD(3));
console.log(isODDUsingTernary(3));

function isODD(a){

    if(a%2!==0){
        return "value is odd";
    }
    else{
        return "value is even";
    }
}
function isODDUsingTernary(a){
    return a%2!==0? "value is odd":"value is even";

}
console.log(isODDUsingTernary, "isODDUsingTernary");

//fn as expression
let funAsExpression=function isODD(a){
 return a%2!==0? "value is odd":"value is even";
}
console.log(funAsExpression);

const arrowFun=(a)=>a%2!==0 ?"value is odd":"value is even";
console.log("output from arrowfun(4):",arrowfun(4));

{function lifeFun()}