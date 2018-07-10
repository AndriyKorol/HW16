//auth init
const auth = new Auth();

//init elements from form
const signupform = document.forms['signup-form'];
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById('password');
const loginBtn = document.querySelector('.login');

//check auth state (is it user logged)
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = "index.html";
    }
});

signupform.addEventListener("submit", newUser);
loginBtn.addEventListener("click", goLogin);

function newUser(e) {
    e.preventDefault();

    if (userName.value && email.value && password.value){
        auth.signup(email.value, password.value)
            .then(() => {
                window.location = "index.html";
            })
            .catch((err) => {
                //show error
                console.log(err);
            })
    }
}

function goLogin() {
    window.location = 'login-start.html'
}