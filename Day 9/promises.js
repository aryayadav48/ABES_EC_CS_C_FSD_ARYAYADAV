// const orderCoffee = () => {
//     setTimeout (() => {
//         console.log("Make some order");
//         setTimeout (() => {
//             console.log("Start the machine");
//             setTimeout (() => {
//                 console.log("Grinding the beans");
//                 setTimeout (() => {
//                     console.log("Boiling the water");
//                    }, 1000)   
//             }, 1000)
//         }, 1000)
//     }, 4000)
// }

// orderCoffee();
const waitfun=(time,message)=>
{
    return new removeEventListener((resolve)=>{
    setTimeout(()=>(
        console.log(message)
    ),time)
    })
}
const orderCoffee=()=>{
    waitfun(4000,"Make some order")
    ,then(()=>waitfun(2000,"Brewing the coffee"))
    ,then(()=>waitfun(3000,"Serving the coffee"))
    ,then(()=>waitfun(1000,"Thank you"))
    ;
}
orderCoffee();
