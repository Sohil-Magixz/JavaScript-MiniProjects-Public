const reduce = document.getElementById("reduce")
const reset = document.getElementById("reset")
const add = document.getElementById("add")
let num = document.getElementById("n")
reduce.addEventListener("click",()=>{
    let n = Number(num.textContent)
    n--;
    num.textContent=String(n)
})

reset.addEventListener("click",()=>{
    let n = Number(num.textContent)
    num.textContent="0"
})

add.addEventListener("click",()=>{
    let n = Number(num.textContent)
    n++
    num.textContent=String(n)
})