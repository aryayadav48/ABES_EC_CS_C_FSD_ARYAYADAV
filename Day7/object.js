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
console.log(student.name);
console.log(student['name']);

let x='name';
console.log(student[x]);

console.log(student.name)
