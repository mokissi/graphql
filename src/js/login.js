import {getJWT} from "./getJWT.js"

export default function login() {
const container = document.createElement("div")
container.className = "container"
const inputUername = document.createElement("input")
inputUername.placeholder = "Enter Username"
inputUername.id = "username"
inputUername.type = "text"
const inputPassword = document.createElement("input")
inputPassword.placeholder = "Enter Password"
inputPassword.id = "password"
inputPassword.type = "password"
const button = document.createElement("button")
button.type = "submit"
button.textContent = "Login!"
button.id = "login"
container.appendChild(inputUername)
container.appendChild(inputPassword)
container.appendChild(button)
document.body.appendChild(container)

button.addEventListener("click", ()=> {
    const usern = document.getElementById("username").value
    const pass = document.getElementById("password").value
    getJWT(usern, pass, container)
})
}

export function logout(){
    let logout_button=document.querySelector(".button")
    logout_button.addEventListener("click",(e)=>{
        e.preventDefault()        
        localStorage.removeItem('jwt');
        location.reload();
    })
}