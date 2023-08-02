var datas=[
    {
        ename:"dev",
        salary:1900,
        eid:21
    },
    {
        ename:"muz",
        salary:2020,
        eid:22
    },
    {
        ename:"loki",
        salary:2020,
        eid:23
    },
    {
        ename:"venki",
        salary:1000,
        eid:24
    },
    {
        ename:"hameela",
        salary:2200,
        eid:25

    }
]
// var table=document.createElement("table")   
// var tbody=document.createElement("tbody")
// document.body.append(table)

var table=document.createElement("table")
var thead=document.createElement("thead")
var tbody=document.createElement("tbody")

var tr=document.createElement("tr")
var th=document.createElement("th")
th.textContent="eid"
tr.append(th)

var th=document.createElement("th")
th.textContent="ename"
tr.append(th)

var th=document.createElement("th")
th.textContent="salary"
tr.append(th)

thead.append(tr)
table.append(thead)
document.body.append(table)

var ogtable=datas.map((value=>{

    var tr=document.createElement("tr")
    var td=document.createElement("td")
    td.textContent=value.eid
    tr.append(td)

    var td=document.createElement("td")
    td.textContent=value.ename
    tr.append(td)

    var td=document.createElement("td")
    td.textContent=value.salary
    tr.append(td)

  
    table.append(tbody)
    tbody.append(tr)

}))


//-------------------------------------
var hr=document.createElement("hr")
document.body.append(hr)

var table=document.createElement("table")
var thead=document.createElement("thead")
var tbody=document.createElement("tbody")

var tr=document.createElement("tr")
var th=document.createElement("th")
th.textContent="eid"
tr.append(th)

var th=document.createElement("th")
th.textContent="ename"
tr.append(th)

var th=document.createElement("th")
th.textContent="salary"
tr.append(th)

thead.append(tr)
table.append(thead)

let high_sal=datas.filter((sal=>{
    return sal.salary>2000
 }))
 console.log(high_sal)

let result=high_sal.map((value=>{
document.body.append(table)
table.append(thead)
table.append(tbody)

var tr=document.createElement("tr")
var td=document.createElement("td")
td.textContent=value.eid
tr.append(td)

var td=document.createElement("td")
td.textContent=value.ename
tr.append(td)

var td=document.createElement("td")
td.textContent=value.salary
tr.append(td)

tbody.append(tr)
}))

var hr=document.createElement("hr")
document.body.append(hr)
//============================================
var table=document.createElement("table")
var thead=document.createElement("thead")
var tbody=document.createElement("tbody")

var tr=document.createElement("tr")
var th=document.createElement("th")
th.textContent="eid"
tr.append(th)

var th=document.createElement("th")
th.textContent="ename"
tr.append(th)

var th=document.createElement("th")
th.textContent="salary"
tr.append(th)

table.append(tr)
var td=document.createElement("td")

document.body.append(table)
table.append(thead)
table.append(tbody)

var lowsalar=datas.filter((lowsal)=>
{
    return lowsal.salary<2000
})
console.log(lowsalar)

var lowsalar=lowsalar.map((value=>{
    var tr=document.createElement("tr")
    var td=document.createElement("td")
    td.textContent=value.eid
    tr.append(td)

    var td=document.createElement("td")
    td.textContent=value.ename
    tr.append(td)

    var td=document.createElement("td")
    td.textContent=value.salary
    tr.append(td)

    tbody.append(tr)

}))

var hr=document.createElement("hr")
document.body.append(hr)



