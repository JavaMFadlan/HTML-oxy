function register(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    
    if (username.value == "" || password.value == "") {
        alert("Masukkan Username Dan Password");
    }
    else if(username.value.length < 6){
        alert("username tak boleh kurang dari 6 huruf");
    } 
    else if(password.value.length < 6){
        alert("password tak boleh kurang dari 6 huruf");
    } 
    else {
        localStorage.setItem('username',username.value);
        localStorage.setItem('password',password.value);
    }
}
function tampil(){
    var x = JSON.parse(localStorage.getItem("data")).username;
    document.getElementById("demo").innerHTML = x;
}

function login(){
    const username = document.forms["forms"]["username"].value;
    const password = document.forms["forms"]["password"].value;

    const x = localStorage.getItem("username");
    const y = localStorage.getItem("password");

    if(username == x && password == y){
        window.location.href = 'tugasoxy-biodata.html';
    }
    else if(username == "" || password == ""){
        alert("Username Atau Password Tak Boleh Kosong!!!")
    }
    else if (username != x || password != y){
        alert("Salah Username Atau Password");
    }
}