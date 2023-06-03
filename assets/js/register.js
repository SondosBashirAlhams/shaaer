
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let email = document.querySelector("#email");
let register_btn = document.querySelector("#sign_up")

register_btn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value === "" || email.value === "" || password.value === ""){
        alert("يرجى تعبئة جميع الحقول")
    } else {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      
      setTimeout ( () => {
          window.location = "login.html"
      } , 1500)
        }
})


function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var toggleIcon = document.getElementById("toggle-icon");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.className = "fa fa-eye-slash";
  } else {
      passwordField.type = "password";
      toggleIcon.className = "fa fa-eye";
  }
}

var passwordField = document.getElementById("password");
var toggleIcon = document.getElementById("toggle-icon");

passwordField.addEventListener("input", function() {
  if (passwordField.value !== "") {
      toggleIcon.style.visibility = "visible";
  } else {
      toggleIcon.style.visibility = "hidden";
  }
});

