// var obj={
//     ename:"smith",
//     age:29,
//     isdeveloper:true,
//     gender:"male"
// }
// console.log(obj)
// //two ways to access members.(1.dot 2.[])

// console.log(obj.age)
// console.log(obj["isdeveloper"])

// obj.ename="ganesh"
// console.log(obj["ename"])

// //delete an object!
// delete obj.ename

// console.log(obj)
//=-----------------------------------
// var stu1={
//      stu_name:"gayatri",
//      marks:100
// }
// var stu2={
//     stu_name:"hari",
//     marks:70
// }
// //value as an expression.
// var stu_database={
//     sno01:stu1,
//     sno02:stu2
// }

// console.log(stu_database.sno01)
//========================================
// var tv={
//     brand:"lg",
//     price:32,
//     behavior:function(){
//         console.log("dvd")
//     }
// }

// console.log(tv.brand)
// tv.behavior()
//----------------------------------------
// var globlal="globe"
// var person={
//     name:"dev",
//     age:29,
//     globle:this.globe,//we cant use this keyword outside the obj method
//     behaviour_telling:function(){
//         return "my name is" +this.name +"age is"+ this.age;
//     }
// }
    
// console.log(person.behaviour_telling())
// console.log(person.globle)

//------------------------------------------------
// let subject={
//     java:["intro","datatypes"],
//     web:["intro"],
//     behaviour:function(){
//         return this.java[0]+"of this java" ;

//     }
// }
// console.log(subject.behaviour())
//--------sir
// let subject={
//     java:[{intro:"intro of java"},
//     "datatypes"]
// }
// console.log(subject.java[0].intro)
//=================de-structuring obj===============================
// var sub={
//     ename:"smith",
//     age:29,
//     gender:"male"
// }
// let{ename:FNAME,age,...d}=sub
// console.log(FNAME)
// console.log(age)
// console.log(d)
// console.log(sub)
//=====================01/08=======================================
// var obj={
//     ename:"smith",
//     age:29,
//     eid:21
// }
// let {ename:firstname="john",age,eid}=obj
// console.log(firstname)

//-------------------------------------
// var globe="global"

// var obj1={
//     empname:"smith",
//     age:29,
//     gender:this.empname,//you should not use this keyword in value
//     behave:function()
//     {
//         return(this.age)
//     }
// }
// console.log(obj1)
//===================three ways===============================
//1. var obj=new Object()
//       ---add property to an object.--
// obj.firstname="steve"
// obj.lastname="smith"
// obj.gender="male"

// console.log(obj)

//       -----access property-----
// console.log(obj.firstname)
// console.log(obj.gender)

//       -----delete property----

// delete obj.gender
// console.log(obj)
//===========================================
//construction function.it is special method to initialize object

function person(ename,age,gender)
{
    this.ename=ename
    this.age=age
    this.gender=gender
    // this.a=a=10
    this.behave=function(){
        console.log(this.ename)
    }
}

var p1=new person("muruga",22,"male")
var p2=new person("venkat",21,"male")
console.log(p1.age)
p1.behave()
// console.log(p1.a)


//static way to add in f(person)
person.companyname="protech"
console.log(person.companyname)

console.log("--------------------------------------")
//instance way to ADD using prototype
person.prototype.color="red"
console.log(p1.color)
console.log(p2.color)

console.log(p1.__proto__)
console.log("--------------------------------------")
//string constructor function=============================
var a2=new String("smith");
console.log(a2)

String.prototype.mymethod=function(a){
    for(i=0;i<a.length;i++)
    {
        console.log(a[i])
    }
}
// String.prototype.mymethod(a2)

a2.mymethod("hari")

//=============================prototype=========
//1.  EVERY Function AND Object associate with am attribute called prototype

// 2.it is not recommend
// p1.__proto__.salary=1000 .if it is umique u have to use like
// p1.salary=2000

p2.salary=3000
person.prototype.height="6ft"
console.log(p1.height)
p1.__proto__.status="single"
// p2.__proto__.salary=2000
console.log(p1.status)
console.log(p2.status)
console.log("---------------------")
//=============================prototype inheritance========================================
function Student(ename,subject)
{
    this.ename=ename
    this.subject=subject
}
function Student_id(sno)
{
    this.sno=sno
}

var student_detail=new Student("muz","js")
var student_no=new Student_id(11)

student_detail.__proto__=student_no
console.log(student_detail.sno)
