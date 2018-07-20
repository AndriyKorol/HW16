<<<<<<< HEAD
class UI {
  constructor() {
    this.container = document.querySelector(".news-container .container .row");
    this.row = document.querySelector(".container");
  }
  addNews(news) {
    const template = `
      <div class="col s12 m6">
          <div class="card left-align">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${news.urlToImage}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${news.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="${news.url}">Read more</a></p>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${news.title}<i class="material-icons right">close</i></span>
                  <p>${news.description}</p>
              </div>
          </div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showLoader() {
    this.clearContainer();

    const template = `
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  showInfo(msg) {
    this.clearContainer();

    const template = `
      <div class="card blue lighten-4">
        <div class="card-content">
            <p>${msg}</p>
        </div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  showError(err){
    const template = `
      <div class="card red lighten-1">
        <div class="card-content">
            <span class="card-title">Error:</span>
            <p>${err}</p>
        </div>
      </div>
    `;

    this.row.insertAdjacentHTML("beforeend", template);
    setTimeout(function () {
         document.querySelector('.red').remove();
    }, 3000);
  }
}

=======
class UI {
  constructor() {
    this.container = document.querySelector(".news-container .container .row");
    this.row = document.querySelector(".container");
  }
  addNews(news) {
    const template = `
      <div class="col s12 m6">
          <div class="card left-align">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${news.urlToImage}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${news.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="${news.url}">Read more</a></p>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${news.title}<i class="material-icons right">close</i></span>
                  <p>${news.description}</p>
              </div>
          </div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showLoader() {
    this.clearContainer();

    const template = `
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  showInfo(msg) {
    this.clearContainer();

    const template = `
      <div class="card blue lighten-4">
        <div class="card-content">
            <p>${msg}</p>
        </div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  showError(err) {
    this.clearContainer();

    const template = `
      <div class="card red lighten-1">
        <div class="card-content">
            <span class="card-title">Error:</span>
            <p>"Невірно заповнені поля пошуку"</p>
        </div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", template);
  }

  formError(err){
    const template = `
      <div class="card red lighten-1">
        <div class="card-content">
            <span class="card-title">Error:</span>
            <p>${err}</p>
        </div>
      </div>
    `;

    this.row.insertAdjacentHTML("beforeend", template);
  }
}

>>>>>>> a3e23470f25f907f94c6d47b9d01040bbcb6d97a
