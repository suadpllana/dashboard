
function login(event){
    event.preventDefault()
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;


if(username === "admin" && password === "admin1234"){
    window.location.href = "dashboard.html"
}
else{
    alert("Kredencialet e juaja jane gabim! Provo perseri")
}

}

function enter(e){
    if(e.key === "Enter"){
        login()
    }
}
function openModal(){
    document.getElementById("overlay").style.display = "flex"
}
function closeModal(){
    document.getElementById("overlay").style.display = "none"
}