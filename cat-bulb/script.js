const on = document.getElementById("on");
const off = document.getElementById("off");

const onbtn = document.getElementById("onbtn");
const offbtn = document.getElementById("offbtn");

onbtn.addEventListener("click",()=>{
    on.classList.remove("hidden");
    on.classList.add("flex")
    off.classList.remove("flex")
    off.classList.add("hidden");
    onbtn.classList.add("bg-red-500")
    offbtn.classList.remove("bg-red-500")
})

offbtn.addEventListener("click",()=>{
    on.classList.remove("flex")
    on.classList.add("hidden")
    off.classList.remove("hidden")
    off.classList.add("flex")
    offbtn.classList.add("bg-red-500")
    onbtn.classList.remove("bg-red-500")
})