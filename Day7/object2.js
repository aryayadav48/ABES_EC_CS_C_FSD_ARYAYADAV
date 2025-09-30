const student={
    name:"xyw",
    course:"B.tech",
    branch:"CS",
    section:"C",
    phoneNo: {
       phoneno1:4336732453, 
       phoneNo2:3423434224, 
    },
    address:{
        hno:23,
        street:"abg",
        city:"ghaziabad",
        state:"Uttar Pradesh",
    }
}
const newStudent=Object.assign({},student);
console.log(newStudent);

newStudent.name="new name";
