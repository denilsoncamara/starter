// function minhaPromise() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('OK')
//         }, 2000);
//     });
// }

// minhaPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(`Erro: ${error}`);
//     });

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 2000);
// });

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();
