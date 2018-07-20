<<<<<<< HEAD
//auth init
const auth = new Auth();
// Init UI
const ui = new UI();

//init elements from form
const signupform = document.forms['signup-form'];
const userName = signupform.elements['username'];
const email = signupform.elements['email'];
const password = signupform.elements['password'];
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
    console.log(e);
    if (email.value && password.value || !email.value || !password.value ){
        auth.signup(email.value, password.value)
            .then(() => {
                window.location = "index.html";
            })
            .catch((err) => {
                return ui.showError(err)
            })
    }
    document.forms['signup-form'].reset();
}

function goLogin() {
    window.location = 'login-start.html'
=======
//auth init
const auth = new Auth();
// Init UI
const ui = new UI();

//init elements from form
const signupform = document.forms['signup-form'];
const userName = document.getElementById("username");
const email = document.getElementById('email');
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

    if (userName.value && email.value && password.value || !email.value || !password.value || !userName.value){
        auth.signup(userName.value, email.value, password.value)
            .then(() => {
                window.location = "index.html";
            })
            .catch((err) => { return ui.formError(err) })
    }
    document.forms['signup-form'].reset();
}

function goLogin() {
    window.location = 'login-start.html'
>>>>>>> a3e23470f25f907f94c6d47b9d01040bbcb6d97a
}