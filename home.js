import headers, { Cards } from "./src/js/allcard.js"
import login from "./src/js/login.js"
let token = localStorage.getItem("jwt")
if (token) {
    headers()
   await Cards()
}else{ 
    // const content=document.querySelector(".container")
    // if (content) {
    //     content.innerHTML = ""; 
    //     content.classList.remove("container");  
    // }
    login()
 }