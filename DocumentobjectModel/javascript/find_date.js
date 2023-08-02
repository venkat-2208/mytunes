const date=new Date();
//get full date.
console.log(date)
//get year
let year=date.getFullYear();
console.log(year)
//Adding 1 because the month index starts from 0 
// let month= date.getMonth()+1; 
// console.log(month); 

let month = String(date.getMonth()+1).padStart(2,"0");
console.log(month)
  
//  This will change our month format to MM,i.e.,08 

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

console.log("The current date is " + currentDate); 

console.log("--------------------------------")




function calc_age(birthdate)
{
     const burday=new Date(bithdate);
     const currentDate=new Date();
     console.log(currentDate)

     let age=currentDate.getFullYear()-burday.getFullYear();
     

     const birthmonth=burday.getMonth();
     const currentMonth=currentDate.getMonth();

     const current=currentDate.getDate();
    //  console.log(current)

     const burday_date=burday.getDate();
    //  console.log(burday_date)

     if(currentMonth<birthmonth || currentMonth==birthmonth && current<burday_date )
     {
        console.log("hi")
        age--;
     }
     return age;
     
}

const bithdate='2003-08-22'
console.log(calc_age(bithdate))
console.log("-------------------------")
function find_bithdate(find)
{
    this.find=find
}
var f1=new find_bithdate('2003-08-22')
var f2=new find_bithdate('2003-09-22')

console.log(f1.find)
console.log(f2.find)

//==================================

	
// const date=new Date()
console.log(date.getMonth()+1)



