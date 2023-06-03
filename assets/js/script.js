// let login = document.querySelector("#login")
// login.addEventListener ("click" , function(e){
//     e.preventDefault()
//         window.location = "login.html"
// });


document.addEventListener("DOMContentLoaded", function() {
    let loginButtons = document.querySelectorAll("#login");
    loginButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            window.location = "login.html";
        });
    });
});

const menuToggle = document.querySelector('.fa');
const header = document.querySelector('.heden-header');

menuToggle.addEventListener('click', function() {
    header.classList.toggle('hidden');
});

