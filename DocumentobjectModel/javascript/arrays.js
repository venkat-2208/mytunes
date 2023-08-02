// var arr=["fam1","fam2","fam3"]
// console.log(arr[0])
//------------------------------
// let bag1="java"

// let bag2=["java","sql","webtech"]
// console.log(bag1)
// console.log(bag2)
//-----------------------------------
// var obj1={
//     java:2,
//     sql:1
// }
// console.log(obj1.java)
//-----------------------------------------
// let bag2=["java","sql","web"]
// for(i=0;i<bag2.length;i++)
// {
//     console.log(bag2[i])

// }
//------------------------------------------
// console.log(bag2[bag2.length-1])
//--------------------------------
//=========================|for of|================
// for(let y of bag2)
// {
//     if(y.length%2==0)
//     console.log(y)
// }
//-------------------------------
// for(let z in  bag2)
// {
//     if(z%2==0)
//     console.log(z)
// }
//======================================================
// let arr=["smith",true,"55","null",function(){
//     console.log("hi")
// },{
//     ename:"smith"
// }]
// // console.log(arr)
//  var count=0;
//  for(var z of arr)
// {
   
//     if(typeof z== ("boolean"))
//     {
//         count++;
//     }       
// }
//  console.log(count)
//======================================================
//================REST AND SPREAD======================================//======================================================

//"syntax":=...REST AND SPREAD OPERATORS!
// var arr=[1,2,3,4,5]
// console.log(arr)
// console.log(...arr)  //spread
//------------------------------------------------------
// let[a,b,...c]=arr
// console.log(a)
// console.log(b)
// console.log(c) //rest operation
//--------------------------------------------------------
// function add(a,b,...a1)
// {
//     console.log(a)
//     console.log(b)
//     console.log(a1)
//     for(let z of a1)
//     {
//         if(z>0)
//         {
//             console.log(z)
//         }
//     }
// }
// add(10,2,6,-3,4,5)
// ---------------------------------------------------------
// var ul=document.getElementById("ul")
// var arr=["tam","eng","mat"]
// for(var y of arr)
// {
//  var li=document.createElement("li")   
//  li.textContent=y
//  ul.append(li)  
// }
//-------------------------------------------------------
// var table=document.createElement("table")
// document.body.append(table)

// var tbody=document.createElement("tbody")
// var arr=["tam","eng","mat","sci"]
// for(var z of arr)
// {
//     var row=document.createElement("tr")
//     var td=document.createElement("td")
//     td.textContent=z;
//     row.append(td)
//     tbody.append(row)
// }
// table.append(tbody)
//----------------------27/07/23----------------------------------w
 //array literal.
// var arr1=[1,2,3,4]
// console.log(arr1)

//-------------------//using new keyword.
// var arr2=new Array()
//  arr2[0]=0;
//  arr2[1]=0;
//  arr2[100]=0;
//  console.log(arr2)

//-----------------//third way to CREATE an array.
//  var arr3=new Array(2,3,4,5)
//  console.log(arr3)

//=======================e.g.for rest nd spread operator
// var arr1=[1,2,3,4]
// var arr2=[5,6,7,8]

// var arr3=[...arr1,...arr2]
// var[a,b,...c]=arr3
// console.log(a)
// console.log(b)
// console.log(c)
//--------------------------
// var hobbies=[
//     "football",
//     "singing",
//     "reading",
//     "cooking",
//     "travelling",
//     "sleeping",
//     "house cleaning",
//     "driving",
//     "cycling",
//     "trecking",
//     "reading"
// ];
// console.log(hobbies.length)
// console.log(hobbies[hobbies.length-1])
// //add elements in the tail.add one or more!------
//  hobbies.push("nakku","sethapayale")
//  console.log(hobbies)
//  console.log(hobbies.length)

// //remove element (only one) in the tail of the array--
//  console.log(hobbies.pop())
//  console.log(hobbies)

// //to add elements in head=unshift().add one or more!--
//  hobbies.unshift("poda dei","poda","jer padi")
//  console.log(hobbies)

// //to remove element in head=unshift().(only one)!--
//  hobbies.shift()
//  console.log(hobbies)

//  //
//  var check=Array.isArray(hobbies)
//  console.log(check)

//------------------METHODS.-------------------------
//1.
// console.log(hobbies.includes("football"))

//2.
// console.log(hobbies.indexOf("football"))

//3.splice modify an original array.
// (startcount,deletecount,[Elementname to be replaced])
// console.log(hobbies.splice(2,3,"nakku"))
// console.log(hobbies)

//4.slice modify an original array.It accepts two values.
// console.log(hobbies.slice(4,5))
// console.log(hobbies)


// var date1=new Date()
// console.log(date1)

// var find_min=Math.min(0,2,3,4)
// console.log(find_min)

// var find_squ=Math.pow(2,3)
// console.log(find_squ)

// var random=Math.random(0,100)
// console.log(random)

// var str="string";
// var find_ran=Math.round(Math.random()*str.length)-1;
// console.log(str[find_ran])

// var str="sring is fie";
// let captcha=str.split(" ")
// console.log(captcha)
// var find_ran=Math.round(Math.random()*captcha.length-1);
// console.log(captcha[find_ran])

//======================================28/07/23=====================================================
// map is an arraymethod is js which accepts callback
// var x=[1,2,3,4,5]

// x.map(function(value,index,arr){
//     console.log(value +"" +index+ ""+arr)})
// console.log(x)
//===========================================================================
// var mapp=x.map(value=>{
//     return value+2
// })
// console.log(mapp)
//===========================================================================

// var x=[1,2,3,4,5]
// function add_element(num)
// {
//     var sum=num.map((value)=>{
//         return value+2
//     })

//     return sum

// }
// console.log(add_element(x))

//=============================================================================
// var x=[1,2,3,4,5]
// function find_odd_even(num)
// {
//     var sum=num.map((value)=>{
//         if(value%2==0)
//         {
//             return value*100
//         }
//         else{
//             return value*10
//         }
//     })
//  return sum

// }
// var res=find_odd_even(x)
// console.log(res)
// //filter==================================================
// let filter_elements=res.filter((value)=>{
//     return value>30;
// })
// console.log(filter_elements)


//reduce=====================================================
// var x=[1,2,3,4,5]
// let find=x.reduce((acc,value)=>
// {

//     return(acc+=value)

// },5)
// console.log(find)
//=====================================================================
// var sal=[200,300,400]
// let find=sal.reduce((acc,value)=>
// {

//     return(acc+=value)

// },2000)
// console.log(find)
//=============================find count==========================
// var x=[1,2,3,1]
var y=["chicken","monkey","duck","duck"]

var count=y.reduce((acc,value)=>{
    if(!acc[value])
    {
        acc[value]=1
    }
    else
    {
        acc[value]++
    }
    return acc

},{})
console.log(count)