// EXERCICIO 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        if (this.adm == true) {
            return true;
        } else {
            return false;
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.adm = true;
    }
}

const user = new Usuario('hsneto@gmail.com', '123456');
const adm = new Admin('helvecioneto77@gmail.com', 'qwert');

console.log(user.isAdmin());
console.log(adm.isAdmin());




//EXERCICIO 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(item => item.idade);
console.log(idade);

const empresa = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade >= 15);
console.log(empresa);

const google = usuarios.find(item => item.empresa == 'Google');
console.log(google);

const idadex2 = usuarios.map(item => item.idade = item.idade * 2);
const idade50 = usuarios.filter(item => item.idade <= 50);
console.log(idade50);





//EXERCICIO 3

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());





//EXERCICIO 4

const empresa1 = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade }, endereco: { estado } } = empresa1;
console.log(nome);
console.log(cidade);
console.log(estado);

const mostraInfo = (({ nome, idade }) => `${nome} tem ${idade} anos.`);
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));



//EXERCICIO 5

const arrNumber = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arrNumber;
console.log(x);
console.log(y);

const soma = (...num) => num.reduce((item, next) => item + next);
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(20, 10, 3));



const usuarioF = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuarioF2 = { ...usuarioF, nome: 'Gabriel' };
const usuarioF3 = { ...usuarioF, endereco: { cidade: 'Lontras' } };

console.log(usuarioF2);
console.log(usuarioF3);




//EXERCICIO 6

const usuarioX = 'Diego';
const idadeX = 23;
console.log(`O usuário ${usuarioX} possui ${idadeX} anos`);


//EXERCICIO 7

const nomeY = 'Diego';
const idadeY = 23;

const usuarioY = {
    nomeY,
    idadeY,
    cidade: 'Rio do Sul',
};

console.log(usuarioY);