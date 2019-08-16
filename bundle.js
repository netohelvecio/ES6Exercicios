"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// EXERCICIO 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.adm == true) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.adm = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user = new Usuario('hsneto@gmail.com', '123456');
var adm = new Admin('helvecioneto77@gmail.com', 'qwert');
console.log(user.isAdmin());
console.log(adm.isAdmin()); //EXERCICIO 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (item) {
  return item.idade;
});
console.log(idade);
var empresa = usuarios.filter(function (item) {
  return item.empresa == 'Rocketseat' && item.idade >= 15;
});
console.log(empresa);
var google = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(google);
var idadex2 = usuarios.map(function (item) {
  return item.idade = item.idade * 2;
});
var idade50 = usuarios.filter(function (item) {
  return item.idade <= 50;
});
console.log(idade50); //EXERCICIO 3

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise()); //EXERCICIO 4

var empresa1 = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa1.nome,
    cidade = empresa1.endereco.cidade,
    estado = empresa1.endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //EXERCICIO 5

var arrNumber = [1, 2, 3, 4, 5, 6];
var x = arrNumber[0],
    y = arrNumber.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }

  return num.reduce(function (item, next) {
    return item + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(20, 10, 3));
var usuarioF = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuarioF2 = _objectSpread({}, usuarioF, {
  nome: 'Gabriel'
});

var usuarioF3 = _objectSpread({}, usuarioF, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuarioF2);
console.log(usuarioF3); //EXERCICIO 6

var usuarioX = 'Diego';
var idadeX = 23;
console.log("O usu\xE1rio ".concat(usuarioX, " possui ").concat(idadeX, " anos")); //EXERCICIO 7

var nomeY = 'Diego';
var idadeY = 23;
var usuarioY = {
  nomeY: nomeY,
  idadeY: idadeY,
  cidade: 'Rio do Sul'
};
console.log(usuarioY);
