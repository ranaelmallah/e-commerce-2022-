 let car = document.querySelector(".car ");
 let count = document.querySelector(".count");
 let cardd = document.querySelectorAll(".to");
 let shopbutton = document.querySelector(".shopbutton");
 let product = document.querySelectorAll(".product");
 let counter = 0
count.innerText=counter;
cardd.onclick=function(){
    counter++
    count.innerText=counter;
    
}
// sing up

const form = document.querySelector("form");
const user = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const conpassword = document.querySelector(".conpassword");
const submit = document.querySelector(".submit");
const nameError = document.querySelector(".nameError");
const useError = document.querySelector(".useError");
const emailError = document.querySelector(".emailError");
const passError = document.querySelector(".passError");
const compassError = document.querySelector(".compassError");
const formError = document.querySelector(".formError");

function validUser() {
  console.log(typeof (user.value))
  if (user.value == "") {
    useError.innerHTML = 'Name is reqired'
    return false
  }
  if (!user.value == String) {
    useError.innerHTML = 'Name is not vaild'
    return false
  }
  useError.innerHTML = ''
  return true;
}

function validMail() {
  console.log(typeof (email.value))
  if (email.value == "") {
    emailError.innerHTML = 'Email is reqired'
    return false
  }
  emailError.innerHTML = ''
  return true;
}


function validpass() {
  if (password.value == "") {
    passError.innerHTML = 'password is reqired'
    return false
  }
  if (password.value.lenght <= 8) {
    passError.innerHTML = 'password must be more than 8 char'
    return false
  }
  passError.innerHTML = ''
  return true;
}

function validcompass() {

  if (conpassword.value === "") {
    compassError.innerHTML = 'password is reqired'
    return false;
  }
  if (conpassword.value !== password.value) {
    compassError.innerHTML = 'password not matched'
    return false
  }
  console.log(password.value.lenght)
  compassError.innerHTML = ''
  return true;
}
form.onsubmit = function (e) {
  if (!validUser() || !validcompass() || !validMail() || !validpass()) {
    e.preventDefault()
    useError.innerHTML =''
    setTimeout(function () {
      formError.style.display = "none";
    }, 3000)
    formError.innerHTML = "fill all filds"
    return false;
  }
  localStorage.setItem("name", user.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("pass", password.value);
  // let localName = localStorage.getItem("name");
  // let welcomMass = `welcome ${localName} to our home page`;
  // document.write(welcomMass);
  // document.body.style.backgroundColor = " rgb(181, 218, 235)";


}
