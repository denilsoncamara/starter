"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Desafio 1
// Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user = new Usuario('any_mail', 'any_password');
var admin = new Admin('any_mail', 'any_password'); // console.log(user.isAdmin());
// console.log(admin.isAdmin());
// Desafio 2
// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

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
}]; // Clone de array de objetos

var uTeste = _objectSpread({}, usuarios);

var uTeste2 = usuarios.map(function (u) {
  return _objectSpread({}, u);
});
console.log(usuarios);
console.log(uTeste);
console.log(uTeste2); // 2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (item) {
  return item.idade;
}); // console.log(idades);
// 2.2 Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var users1 = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
}); // console.log(users1);
// 2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var users2 = usuarios.find(function (item) {
  return item.empresa === 'Google';
}); // console.log(users2);
// 2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

var users3 = usuarios.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
}); // console.log(users3);
// Desafio 3
// Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1

var arr = [1, 2, 3, 4, 5]; // expressão de função

arr.map(function (item) {
  return item + 10;
}); // arrow function
// console.log(arr.map(item => item + 10));
// 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(usuario) {
//     return usuario.idade;
// }

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; // console.log(mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function


var nome = "Diego";
var idade = 23; // function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; // console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // console.log(promise);
// Desafio 4
// 4.1 Desestruturação simples
// A partir do seguinte objeto:


var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:

var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado; // console.log(name); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// 4.2 Desestruturação em parâmetros
// Na seguinte função:
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// Usando desestruturação nos parâmetros da função

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
} // console.log(mostraInfo( { nome: 'Diego', idade: 23 } ));
// Desafio 5
// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.


var arr5 = [1, 2, 3, 4, 5, 6];
var x = arr5[0],
    y = arr5.slice(1); // console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...

function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (t, n) {
    return t + n;
  });
} // const soma = (...nums) => nums.reduce((t, n) => t + n);
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// 5.2 Spread
// A partir do objeto e utilizando o operador spread:


var usuario5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; // Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.

var usuario52 = _objectSpread({}, usuario5, {
  nome: 'Gabriel'
}); // console.log(usuario5);
// console.log(usuario52);
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.


var usuario53 = _objectSpread({}, usuario5, {
  endereco: {
    cidade: 'Lontras'
  }
}); // console.log(usuario53);
// Desafio 6
// Converta o seguinte trecho de código utilizando Template Literals:


var usuario6 = 'Diego';
var idade6 = 23; // console.log('O usuário ' + usuario6 + ' possui ' + idade6 + ' anos');
// console.log(`O usuário ${usuario6} possui ${idade6} anos`);
// Desafio 7
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

var newName = 'Diego';
var newAge = 23;
var newUser = {
  newName: newName,
  newAge: newAge,
  newCity: 'Rio do Sul'
}; // Sintaxe curta de objetos (Object Short Syntax)

var newUser2 = {
  newName: newName,
  newAge: newAge,
  newCity: 'Rio do Sul'
}; // console.log(newUser);
// console.log(newUser2);
