let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")
let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")
loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value==="" || password.value===""){
        alert("يرجى تعبئة جميع الحقول")
    } else {
        if ( (getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        } else {
            alert("اسم المستخدم او كلمة المرور غلط  ")
            username.value=""
            password.value=""
        }
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


    