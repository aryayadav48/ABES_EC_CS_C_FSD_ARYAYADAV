class student{
    constructor(rollno,name,course,branch){
        this.rollno=rollno;
        this.name=name;
        this.course=course;
        this.branch=branch;
    }
}

const element1=new student(101,"xyw","B.tech","CS");
const element2=new student(102,"abc","B.tech","IT");
console.log(element1);
console.log(element2);