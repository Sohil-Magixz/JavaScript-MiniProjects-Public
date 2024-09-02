/*console.log(1);
console.log(2);

let res = fetch("https://baconipsum.com/api/?type=all").then((res)=>{
    return res.json();
}).then((a)=>{
    console.log(a)
}).catch((error)=>{
    console.log("User returned Error: ",error);
});*/

async function fetchData(){
    try{
        let data = await fetch("https://baconipsum.com/api/?type=all");
        let real_data = await data.json();
        console.log(real_data);
    }
    catch(error){
        console.log("Error Caught: ",error);
    } finally{
        console.log("Function Executed Successfully");
    }

}
fetchData();
console.log(3);