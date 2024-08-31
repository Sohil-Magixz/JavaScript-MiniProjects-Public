const form = document.getElementById("myform");
const password = document.getElementById("new_password");
const con_password = document.getElementById("confirm_password");


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let p1 = document.getElementById("passwordError");
let p2 = document.getElementById("passwordMissMatch");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    p1.textContent="";
    p2.textContent="";
    if(passwordPattern.test(password.value)){
        if(password.value===con_password.value){
            form.reset();
            alert("Password Changed Successfully");
        }
        else{
            p2.textContent = "Both the passwords Doesn't matach"
        }
    }
    else{
        if(!passwordPattern.test(password.value)){
            p1.textContent="Enter a Valid Password";
        }
    }
});