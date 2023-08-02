
var hover1=document.getElementById("hover1")
var ufname=document.getElementById("ufname")
ufname.addEventListener("keydown",()=>{
    var uname=document.getElementById("ufname").value
    console.log(uname.length)
    if(uname.length>=0 &&  uname.length<=4 )
    {
      var hover1=document.getElementById("hover1")
     hover1.textContent="invalid username"
    }
 
    else
    {
        var hover1=document.getElementById("hover1")
        hover1.textContent="valid username"
    }
})
//--------------pass---------------------------
var hover2=document.getElementById("hover2")
var pwd=document.getElementById("pwd")
pwd.addEventListener("keydown",()=>{
    var password=document.getElementById("pwd").value
    console.log(password.length)
    if(password.length<6)
    {
      var hover2=document.getElementById("hover2")
         hover2.textContent="password should contain 7 letters"
    }
    else
    {
        var hover2=document.getElementById("hover2")
        hover2.textContent="valid password"
    }
})
//--------------------------------------------

var uname=document.getElementById("ufname").value
var pwd=document.getElementById("pwd")
pwd.addEventListener("keydown",()=>{
  if(uname.length==0)
  {
    hover1.textContent="**Enter username first**"
  }
})

var sign=document.getElementById("sign")
sign.addEventListener("click",()=>{
  var div2=document.getElementById("div2")
  var div1=document.getElementById("div1")
  div2.style.display="block"
  div1.style.display="none"
})

//=======================stu-login===============
var i1=document.getElementById("i1")
i1.addEventListener("keydown",()=>{
  var i1=document.getElementById("i1")
  var i1value=i1.value;
  console.log(i1value.length)
  if(i1value.length>=0 &&  i1value.length<=4 )
  {
    var hover3=document.getElementById("hover3")
    hover3.textContent="invalid username"
  }
  else
  {
      var hover3=document.getElementById("hover3")
      hover3.textContent="valid username"
  }
  
})

var i3=document.getElementById("i3")
i3.addEventListener("keydown",()=>{
  var i3=document.getElementById("i3")
  var i3value=i3.value;
  console.log(i3value)
  if(i3value.length>=0 &&  i3value.length<=5 )
  {
    var hover4=document.getElementById("hover4")
    hover4.textContent="password must contain 7 letters"
  }
  else
  {
      var hover4=document.getElementById("hover4")
      hover4.textContent="**password is strong**"
  } 
})

var i4=document.getElementById("i4")
i4.addEventListener("keypress",()=>{
  var i31value=document.getElementById("i3").value
  console.log(i31value)
  var i4value=document.getElementById("i4").value
  console.log(i4value)
  if(i4value==i31value)
  {
    var hover5=document.getElementById("hover5")
    hover5.textContent="password matched"
  }
  else
  {
      var hover5=document.getElementById("hover5")
      hover5.textContent="**password mismatched**"
  } 
})

var h2=document.getElementById("f1")
h2.addEventListener("click",()=>{
  var div2=document.getElementById("div2")
  var div1=document.getElementById("div1")
  div2.style.display="none"
  div1.style.display="block"
})

//---------------captcha---------
var captcha=document.getElementById("captcha");
var str="dfd90ff fhfhbv23 gfklfj34g gf67hf2 ddg25hfg 23fthhdd fd56dfds3";
let cat=str.split(" ")
console.log(cat)
var find_ran=Math.round(Math.random()*cat.length-1)
captcha.textContent=(cat[find_ran])
console.log(cat[find_ran])
//-------------
var check=document.getElementById("check")
check.addEventListener("keyup",()=>
{
  var check=document.getElementById("check").value
  var captch=captcha.textContent
  if(check==captch)
  {
    var capcheck=document.getElementById("capcheck")
    capcheck.textContent="captcha matched"
  }
  else 
  {
    var capcheck=document.getElementById("capcheck")
    capcheck.textContent="captcha mismatched" 
    
  }

})








