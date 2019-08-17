//EXERCICIO 1

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function oneSecond() {
    try {
        await delay(console.log('1s'));
        await delay(console.log('2s'));
        await delay(console.log('3s'));
        await delay(console.log('4s'));
        await delay(console.log('5s'));
    } catch (error) {
        console.warn('error');
    }
}

oneSecond();




//EXERCICIO 2

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const dados = await axios.get(`https://api.github.com/users/${user}`);
        console.log(dados);
    } catch (error) {
        console.warn('Usuario inexistente');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');





//EXERCICIO 3

class Github {
    static async getRepositories(repo) {
        try {
            const dados = await axios.get(`https://api.github.com/repos/netohelvecio/${repo}`);
            console.log(dados);
        } catch (error) {
            console.warn('Repositório não existe');
        };
    }
}
Github.getRepositories('ES6Exercicios');
Github.getRepositories('rocketseat/dslkvmskv');





//EXERCICIO 4

const buscaUsuario = async usuario => {
    try {
        const dados = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(dados);
    } catch (error) {
        console.warn('Usuario Inexistente!');
    }
    
}

buscaUsuario('netohelvecio');