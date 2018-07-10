//auth init
const auth = new Auth();
// Init UI
const ui = new UI();

//init elements from form
const form = document.forms['login-form'];
const email = document.getElementById("email");
const password = document.getElementById('password');
const signup = document.querySelector('.signup');

//check auth state (is it user logged)
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = "index.html";
    }
});

form.addEventListener("submit", onLogin);
signup.addEventListener("click", signUp);

function onLogin(e) {
    e.preventDefault();

    if (email.value && password.value || !email.value || !password.value){
        auth.login(email.value, password.value)
            .then(() => {
                window.location = "index.html";
            })
            .catch((err) => { return ui.formError(err) });
    }
    document.forms['login-form'].reset();
}

function signUp() {
    window.location = 'sign-up.html'
}
