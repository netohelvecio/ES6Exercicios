import api from './api';

class GitHubUser {
    constructor() {
        this.user = {};
        this.formGit = document.getElementById('formGit');
        this.listaDados = document.getElementById('listaDados');
        this.imgUser = document.getElementById('imgUser');
        this.card = document.getElementById('card');
        this.nomeUser = document.getElementById('nomeUser');
        this.inputBuscaGit = document.getElementById('inputBuscaGit');
        this.registraEventos();
    }

    registraEventos() {
        this.formGit.onsubmit = event => this.addUser(event);
    }

    loading(loading = true) {
        if (loading === true) {
            let carregando = document.createElement('span');
            carregando.appendChild(document.createTextNode('Carregando...'));
            carregando.setAttribute('id', 'carregando');
            this.card.appendChild(carregando);
        } else {
            document.getElementById('carregando').remove();
        }
    }

    async addUser(event) {
        event.preventDefault();

        this.listaDados.innerHTML = '';
        this.imgUser.innerHTML = '';
        this.nomeUser.innerHTML = '';

        const usuario = this.inputBuscaGit.value;

        if (usuario === '') {
            alert('Informe um usuário!');
            return;
        }

        this.loading();

        try {
            const response = await api.get(`/users/${usuario}`);
            const { name, login, avatar_url, html_url, location, email } = response.data;

            this.user = {
                name,
                login,
                avatar_url,
                html_url,
                location,
                email
            }
            this.exibeCard();
        } catch (error) {
            alert('Usuário Inexistente!')
        }

        this.inputBuscaGit.value = '';
        this.loading(false);
    }

    exibeCard() {
        let avatarCard = document.createElement('img');
        avatarCard.setAttribute('src', this.user.avatar_url);

        let nomeCard = document.createElement('h3');
        nomeCard.appendChild(document.createTextNode(this.user.name));

        let loginCard = document.createElement('li');
        loginCard.appendChild(document.createTextNode(this.user.login));

        let locationCard = document.createElement('li');
        locationCard.appendChild(document.createTextNode(this.user.location));

        let emailCard = document.createElement('li');
        emailCard.appendChild(document.createTextNode(this.user.email));

        let urlCard = document.createElement('li');
        //urlCard.appendChild(document.createTextNode(this.user.html_url));

        let linkCard = document.createElement('a');
        linkCard.setAttribute('target', '_blank');
        linkCard.setAttribute('href', this.user.html_url);
        linkCard.appendChild(document.createTextNode(this.user.html_url));
        urlCard.appendChild(linkCard);

        listaDados.appendChild(locationCard);
        listaDados.appendChild(loginCard);
        listaDados.appendChild(emailCard);
        listaDados.appendChild(urlCard);

        this.imgUser.appendChild(avatarCard);
        this.nomeUser.appendChild(nomeCard);
    }
}

new GitHubUser();
