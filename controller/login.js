import dataUser from "../data/dataUser"

//Ẩn hiện password
function setShow(idInput, idClass){
    const showPassword = document.getElementById(idClass)
    let passwordField = document.getElementById(idInput)

    if(passwordField.type === "password"){
        passwordField.type = "text"
        showPassword.className = "fa-solid fa-eye"
    }
    else{
        passwordField.type = "password";
        showPassword.className = "fa-solid fa-eye-slash"
    }
}

//Submit
function handlerLogin(url){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username === "admin" && password === "12345"){
        alert("Đăng nhập thành công!")
        window.location.href = url
    }
}