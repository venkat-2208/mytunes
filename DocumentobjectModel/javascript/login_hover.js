var div2=document.getElementById("div2")
div2.style.display="none";

var re=document.getElementById("reg")
re.addEventListener("click",(element)=>{
    div2.style.display="block";
    element.stopPropagation()
})

var nav=document.getElementById("link")
nav.addEventListener("click",(element)=>{
    div2.style.display="none";
    element.stopPropagation()
})

var main=document.getElementById("main")
main.addEventListener("click",(element)=>{
    div2.style.display="none";
    element.stopPropagation()
})


    