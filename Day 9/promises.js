const orderCoffee = () => {
    setTimeout (() => {
        console.log("Make some order");
        setTimeout (() => {
            console.log("Start the machine");
            setTimeout (() => {
                console.log("Grinding the beans");
                setTimeout (() => {
                    console.log("Boiling the water");
                   }, 1000)   
            }, 1000)
        }, 1000)
    }, 4000)
}

orderCoffee();

const waitFun=(time,message) =>{
    return new Promise(()=>{
         setTimeout(() =>{
        console.log(message);
    },time)
    })
}
const orderCoffee =()=>{
     waitFun(4000,"Make same order.")
     ,then(()=> waitFun(1000,"Start the machine"))
     ,them(()=> waitFun(1000,"Start the machine"))
     ,then(()=> waitFun(1000,"Grinding the beans"));
}
     const orderCoffee =()=>{
     waitFun(4000,"Make same order.");
     await  waitFun(1000,"Start the machine")
     await  waitFun(1000,"Start the machine");
     await  waitFun(1000,"Grinding the beans");
      await  waitFun(1000,"Grinding the beans");
}
