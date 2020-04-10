let bodyElement = document.querySelector('body');
let userElement = document.querySelector('div#info-user');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');
let listElement = document.querySelector('ul');
let errorElement = document.querySelector('.error');
let loadingElement = document.querySelector('.loading');

function renderInfoUser(user) {
    userElement.innerHTML = '';
    loadingElement.innerHTML = '';
    inputElement.value = '';

    let avatarElement = document.createElement('img');
    avatarElement.setAttribute('src', user.avatar_url);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', user.html_url);
    linkElement.setAttribute('target', '_blank');
    linkElement.setAttribute('title', user.name);

    linkElement.appendChild(avatarElement);

    let nameElement = document.createElement('h2');
    let textName = document.createTextNode(user.name);
    
    nameElement.appendChild(textName);

    let descElement = document.createElement('h3');
    let textDesc = document.createTextNode(user.bio);

    descElement.appendChild(textDesc);
    
    userElement.appendChild(linkElement);
    userElement.appendChild(nameElement);
    userElement.appendChild(descElement);
}

function renderRepositories(repositories) {
    listElement.innerHTML = '';

    for (repo of repositories) {
        let textElement = document.createTextNode(repo.name);
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'item');

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', repo.html_url);
        linkElement.setAttribute('target', '_blank');

        linkElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
    bodyElement.setAttribute('class', 'show-list');
}

function renderLoading() {
    console.clear();

    userElement.innerHTML = '';
    listElement.innerHTML = '';
    errorElement.innerHTML = '';
    bodyElement.setAttribute('class', '');

    let textElement = document.createTextNode('Carregando...');
    loadingElement.setAttribute('class', 'loading');

    loadingElement.appendChild(textElement);
}

function renderError(error) {
    listElement.innerHTML = '';
    loadingElement.innerHTML = '';
    bodyElement.setAttribute('class', 'show-error');

    console.warn(error);
    let textElement = document.createTextNode('Ocorreu um erro ao processar a requisição. Verifique os dados e tente novamente.');

    errorElement.style.color = '#f00';
    errorElement.style.fontSize = '1.4rem';
    errorElement.style.textAlign = 'center';

    errorElement.appendChild(textElement);
}

function getInfoUser() {
    let user = inputElement.value;

    if (!user) return;

    renderLoading();

    setTimeout(function() {
        axios.get(`https://api.github.com/users/${user}`)
            .then(function(response) {
                renderInfoUser(response.data);
                listRepositories(user);
            })
            .catch(function(error) {
                renderError(error);
            });
    }, 2000);
}

function listRepositories(user) {
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function(response) {
            renderRepositories(response.data);
        })
        .catch(function(error) {
            renderError(error);
        });
}

buttonElement.addEventListener('click', getInfoUser);