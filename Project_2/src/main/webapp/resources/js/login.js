const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

let usernameElement = document.getElementById("username");
let passwordElement = document.getElementById("password");
let errorMessage = document.getElementById("login-error");
//let submitBtn = document.getElementById("")
//submitBtn.addEventListener("click", login);

async function login(){

    errorMessage.innerText = "";

    console.log("We handled the click event of the submit button");
    //getting username from the form field
    let username = usernameElement.value;
    //let's get the password from the form field
    let password = passwordElement.value;

    let loginObj = {
        username,
        password
    }

    console.log("Ready to login: ", loginObj);
try{
    //if the request is successful all is well, if it fails/returns !200 it will be in the catch
    let req = await fetch("http://localhost:8080/Project2/api/user/", {
        method: 'Post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(loginObj)
    });

    let res = await req.json();

    console.log("push user to the next page");
    console.log(res);
    window.location.href = "./logged-in.html";

    } catch(e){
        errorMessage.innerText = "Incorrect credentials. Please try again."
        console.log("The user did not login successfully");
        console.log(e);
    }
}