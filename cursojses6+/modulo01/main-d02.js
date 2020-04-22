const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

// 2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(item => item.idade);
console.log(idades);

// 2.2 Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
const rocketseat = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(rocketseat);

// 2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const google = usuarios.find(item => item.empresa === 'Google');
console.log(google);

// 2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:
const calc = usuarios
    .map(item => ({ ...item, idade: item.idade * 2 }))
    .filter(item => item.idade <= 50)

console.log(calc);