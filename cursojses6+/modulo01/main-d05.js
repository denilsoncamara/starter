// 5.1.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.1.2
function soma(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}

// 5.2.1
const usuario2 = { ...usuario, nome: 'Gabriel' };

console.log(usuario2);

// 5.2.2
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };

console.log(usuario3);