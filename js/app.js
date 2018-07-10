// Init http
const http = new Http();
// Init UI
const ui = new UI();
// Api key
const apiKey = "c470735f5d6143a9a09869bf563b8eae";
//auth init
const auth = new Auth();


// Init elements
const select = document.getElementById("country");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const category = document.getElementById("category");
const newsSources = document.getElementById("newsSource");
const logout = document.querySelector('.logout');

// All events
select.addEventListener("change", onChangeCountry);
category.addEventListener("change", onChangeCategory);
newsSources.addEventListener("change", onChangeNewsSource);
searchBtn.addEventListener("click", onSearch);
logout.addEventListener("click", onLogout);

//Check auth status
firebase.auth().onAuthStateChanged(function (user) {
   if(!user){
       window.location = "login-start.html";
   }
});

// Event handlers
function onChangeCountry(e) {
    // Показываю прелодер
    ui.showLoader();
    // Делаем запрос на получение новостей по выбранной стране
    let url =`https://newsapi.org/v2/top-headlines?country=${select.value}&apiKey=${apiKey}`;
    pars(url);

}

function onChangeCategory(e) {
    // Показываю прелодер
    ui.showLoader();
    // Делаем запрос на получение новостей по выбранной стране
    if(select.value.length){
        let url = `https://newsapi.org/v2/top-headlines?country=${select.value}&category=${category.value}&apiKey=${apiKey}`;
        pars(url);
    }
}

function onChangeNewsSource(e) {
    // Показываю прелодер
    ui.showLoader();

    // Делаем запрос на получение новостей по выбранной стране
    let url =`https://newsapi.org/v2/top-headlines?sources=${newsSources.value}&apiKey=${apiKey}`;
    pars(url);
}

function onSearch(e) {
    // Делаем запрос на получение новостей по тому что введено в инпут
    let url =`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`;
    pars(url);
}

function pars(url) {
    http.get(url)
        .then((res)=> {
            const response = JSON.parse(res.response);
            // Удаляем разметку из контейнера
            ui.clearContainer();
            // перебираем новости из поля articles в объекте response
            response.articles.forEach(news => ui.addNews(news))
        })
        .catch((err)=>{return ui.showError(err) });
    document.forms['searching'].reset();
}

function onLogout() {
    auth.logout()
        .then(() => window.location = 'login-start.html' )
        .catch((err) => console.log(err));
}