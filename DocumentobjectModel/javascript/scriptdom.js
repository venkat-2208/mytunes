// console.log(document.all[1])
//mqnipulate your existinf dom!
//----------------id----------------
// var div=document.getElementById("main_con")
// console.log(div)
// div.style.backgroundColor="red"

//-----------------class---------------------
// var myclass=document.getElementsByClassName("child")
// console.log(myclass)
// for(i=0;i<myclass.length;i++)
// {
//     myclass[i].style.backgroundColor="blue"
//     myclass[i].textContent="this is content"
// }
//----------------tag-----------------------------
// var para=document.getElementsByTagName("li")
// for( i=0;i<para.length;i++)
// {
//     para[i].innerText="mango from doc"
// }

//-------------css selector------------------
// var main_con=document.querySelectorAll(".child")
// console.log(main_con)
// var main_con=document.querySelector(".child")
// console.log(main_con)


// var para1=document.getElementsByClassName("child")[1]
// console.log(para1)
// console.log(para1.parentElement.nextElementSibling.children[1])
// para1.parentElement.nextElementSibling.children[1].style.backgroundColor="red"var

// var mydiv=document.createElement("div")

// document.body.append(mydiv)
// mydiv.style.backgroundColor="skyblue"

// mydiv.style.height="170px"

// var p1=document.createElement("p")
// var p2=document.createElement("p")

// p1.textContent="this is my content1"
// p1.style.backgroundColor="brown"

// p2.textContent="this is my content2"
// p2.style.backgroundColor="brown"

// mydiv.append(p1)
// mydiv.append(p2)

// var h1=document.createElement("h1")
// var h2=document.createElement("h1")
// h1.textContent="HEADING1"
// h2.textContent="HEADING2"

// mydiv.append(h1)
// mydiv.append(h2)

// var mydiv2=document.createElement("div")

// mydiv2.style.height="150px"
// mydiv2.style.backgroundColor="red"
// document.body.append(mydiv2)

// //set attributew
// mydiv.id="mydiv"
// mydiv.className="myclass"
// mydiv.setAttribute("id","mydiv")

// var loc=prompt("enter location")
// var ename=prompt("enter ename")

// mydiv.append(loc)
// mydiv.append(ename)

// var ul=document.createElement("ul")

// mydiv.append(ul)

// var num=prompt("enter no of")

// let arr=new Array(num)
// for(i=0;i<arr.length;i++)
// {

//     arr[i]=document.createElement("li")
//     arr[i].textcontent(prompt("enter animal"+i))
//     ul.appendChild(arr[i])
// }
//=================================================

// var table=document.createElement("table") 
// mydiv.append(table) 
// var thead=document.createElement("thead")

// table.append(thead)
// var trow1=document.createElement("tr")
// thead.append(trow1)


// var th=document.createElement("th")
// th.textContent="S.no"
// trow1.append(th)

// var th=document.createElement("th")
// th.textContent="ename"
// trow1.append(th)

// var th=document.createElement("th")
// th.textContent="Elocation"
// trow1.append(th)

// var tbody=document.createElement("tbody")
// table.append(tbody)
// var trow2=document.createElement("tr")
// tbody.append(trow2)
// var td11=document.createElement("td")
// td11.textContent="1"
// trow2.append(td11)
// var td12=document.createElement("td")
// td12.textContent="smith"
// trow2.append(td12)
// var td13=document.createElement("td")
// td13.textContent="bamglore"
// trow2.append(td13)

// var trow3=document.createElement("tr")
// tbody.append(trow3)
// var td21=document.createElement("td")
// td21.textContent="2"
// trow3.append(td21)
// var td22=document.createElement("td")
// td22.textContent="danny"
// trow3.append(td22)
// var td23=document.createElement("td")
// td23.textContent="bamglore"
// trow3.append(td23)

// //===============================h.w.==========================================================================
// var mydiv=document.createElement("div")

// document.body.append(mydiv)
// mydiv.style.backgroundColor="skyblue"

// mydiv.style.height="170px"

// var table=document.createElement("table") 
// mydiv.append(table) 
// var thead=document.createElement("thead")

// table.append(thead)
// var trow1=document.createElement("tr")
// thead.append(trow1)


// var th=document.createElement("th")
// th.textContent="S.no"
// trow1.append(th)

// var th=document.createElement("th")
// th.textContent="ename"
// trow1.append(th)

// var th=document.createElement("th")
// th.textContent="Elocation"
// trow1.append(th)

// var body=document.createElement("tbody")
// table.append(body)

// var rows=Number(prompt("enter the size of rows:"))
// var col=Number(prompt("enter the size of cols:"))

// for(i=0;i<rows;i++)
// {
//     var trow =document.createElement("tr")
//     for(j=0;j<col;j++)
//     {

//         var td=document.createElement("td")
//         td.textContent= prompt("enter the values"+(i+1)+" "+(j+1)+":")
//         trow.append(td)
//     }
//     body.appendChild(trow)
// }
// console.log(table)

// //====================================h.w.2===============================================================================
// var header=document.createElement("header")
// header.textContent="HEADER"
// header.style.textAlign="center"
// document.body.append(header)

// var nav=document.createElement("nav")
// var home=document.createElement("a")
// home.textContent="home"

// nav.append(home)

// var home1=document.createElement("a")
// home1.textContent="gallery"
// home1.style.paddingLeft="130px"
// nav.append(home1)

// var home2=document.createElement("a")
// home2.textContent="package"
// home2.style.paddingLeft="130px"
// nav.append(home2)

// nav.style.wordSpacing="30px";
// nav.style.paddingleft="130px"
// nav.style.border="1px solid black"
// document.body.append(nav)


// var div=document.createElement("div")
// document.body.append(div)
// div.style.height="550px"
// div.style.border="1px solid black"


// var sec2=document.createElement("section")
// sec2.style.border="1px solid black"
// sec2.style.height="230px"
// sec2.style.width="290px"
// sec2.style.backgroundImage=`url("https://images.pexels.com/photos/17295498/pexels-photo-17295498/free-photo-of-deer-ears-in-green-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`

// var sec21=document.createElement("section")
// sec21.style.border="1px solid black"
// sec21.style.height="230px"
// sec21.style.width="290px"
// var video=document.createElement("video")
// sec21.appendChild(video)

// video.setAttribute("contols",true)

// var src=document.createElement("source")
// video.appendChild(src)

// src.setAttribute("src","/video/videoplayback.mp4")
// video.style.height="150px"
// video.style.width="150px"

// div.append(sec2)
// div.append(sec21)

// div.style.display="flex"
// div.style.gap="50px"



// console.log(sec2)




// var footer=document.createElement("footer")
// footer.textContent="FOOTER"
// footer.style.textAlign="center"
// document.body.append(footer)
//=============================================================================================================
// function fun()
// {
//     var ename=prompt("enter ename")
//     var Elocation=prompt("enter elocation")
//     var empname=document.getElementById("ename")
//     var Emplocation=document.getElementById("elocation")
//     empname.textContent=`empname:${ename}`;
//     Emplocation.textContent=`emploc:${Elocation}`;
// }
// console.log(fun)

//================================list===============================================================
// function fun()
// {
//     var animal1=prompt

// }
//-----------------------------------event--------------------------------------------------------------
// var btn_add=document.getElementById("btn_add");
// btn_add.addEventListener("click",function(){
//     var num1=document.getElementById("num1").value;
//     var num2=document.getElementById("num2").value;

//     var sum=Number(num1)+Number(num2)
//     var result=document.getElementById("head1");
//     result.textContent=`the sum of${num1} anf ${num2} is ${sum}`
// })
//----------------------------------task1:choose plce----------------------------------------------------
// var select_place=document.getElementById("select_place")
// select_place.addEventListener("change",()=>{
//     var select_place=document.getElementById("select_place").value;
//     var res=document.getElementById("h1")
//     res.textContent=`the selected place is ${select_place}`
// })
//-------------------------------------------------------------------------------

//events:keypress,keyup,keypressesd

//============================H.W.1==============================================================================

// var clr=document.getElementById("clr")
// clr.addEventListener("change",()=>{
//     var clr=document.getElementById("clr").value;
//     console.log(clr)
//     console.log(document.body.style.backgroundColor=clr)
// })
//==============================H.W.2=====================================================================================
// var d1=document.getElementById("d1")
// var d2=document.getElementById("d2")
// d2.style.display="none"
// d2.style.height="100vh"

// var btn_add=document.getElementById("add")
// btn_add.addEventListener("click",()=>{
//     var num1=document.getElementById("num1").value;
//     var num2=document.getElementById("num2").value;
//     let h1=document.getElementById("h1")
//    let p=Number(num1)+Number(num2)
//     d2.style.display="block"
//     d1.style.display="none"
//     h1.textContent=`the sum of two no.s is${p}`
//     })
//     // console.log(p)

// var btn_sub=document.getElementById("sub")
// btn_sub.addEventListener("click",()=>{
        
//         var num1=document.getElementById("num1").value;
//         var num2=document.getElementById("num2").value;
//         let h1=document.getElementById("h1")
//         let p=Number(num1)-Number(num2)
//         d2.style.display="block"
//         d1.style.display="none"
//         h1.textContent=`the sub of two no.s is${p}`
//         console.log(p)}) 
// //   //------------------------------------------------------------  
   
//   var btn_mul=document.getElementById("mul")
//   btn_mul.addEventListener("click",()=>{
      
//       var num1=document.getElementById("num1").value;
//       var num2=document.getElementById("num2").value;
//       var h1=document.getElementById("h1")
//       p=Number(num1)*Number(num2)
//       d2.style.display="block"
//       d1.style.display="none"
//       h1.textContent=`the mul of two no.s is${p}`
//       })       
 
//     var btn_div=document.getElementById("div")
//     btn_div.addEventListener("click",()=>{
//         var num1=document.getElementById("num1").value;
//         var num2=document.getElementById("num2").value;
//         var h1=document.getElementById("h1")
//         p=Number(num1)/Number(num2)
//         d2.style.display="block"
//         d1.style.display="none"
//         h1.textContent=`the div of two no.s is${p}`
//         console.log(p)})
     
//      var btn=document.getElementById("bck")
//      btn.addEventListener("click",()=>
//      {
//         d2.style.display="none"
//         d1.style.display="block"
//      })  

//---------------------------hw3-----------------------------------------------------
//====================================================================================
var d1=document.getElementById("div1")
var d2=document.getElementById("div2")
var bck=document.getElementById("bck")
d2.style.display="none"

d2.style.height="30vh"



var h1= document.getElementById("h1");

var submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
d1.style.display="none"
d2.style.display="block"
var cname=document.getElementById("cn").value
var cbno=document.getElementById("cbno").value
var cin=document.getElementById("cin").value
var co=document.getElementById("co").value
var  trow=document.createElement("tr")

var td=document.createElement("td")
td.textContent=cname
trow.append(td)

var td=document.createElement("td")
td.textContent=cbno
trow.append(td)

var td=document.createElement("td")
td.textContent=cin
trow.append(td)

var td=document.createElement("td")
td.textContent=co
trow.append(td)
var tbody=document.getElementById("tbody")
tbody.append(trow)})

bck.addEventListener("click",()=>
     {
        d2.style.display="none"
        d1.style.display="block"
     }) 
     var edit=document.getElementById("edit")
     var update=document.getElementById("update")

     edit.addEventListener("click",()=>{
     table.setAttribute("contenteditable","true")
     })

     update.addEventListener("click",()=>{
      table.setAttribute("contenteditable","false")
      })
   

//=======================================H.W.4===================================================

















