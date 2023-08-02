var gp=document.getElementById("gp")
gp.addEventListener("click",(element)=>{
    gp.style.backgroundColor="red"
    console.log("evetnphase"+element.eventPhase)
})

var p=document.getElementById("parent")
p.addEventListener("click",(element)=>{
    p.style.backgroundColor="blue"
    console.log("evetnphase"+element.eventPhase)
    element.stopPropagation()//to stop bubbling flow
})

var c=document.getElementById("child")
c.addEventListener("click",(element)=>{
    c.style.backgroundColor="green"
    console.log("child captu")
    console.log("evetnphase"+element.eventPhase)
})
var p1=document.getElementById("p")
var check=document.getElementById("check")
check.addEventListener("click",(element)=>{
   element.preventDefault()
   element.stopPropagation()
   p1.textContent="prevented"

})