// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}

umPorSegundo();

// B
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe.');
    }
}

getUserFromGithub('diego3g')
getUserFromGithub('diego3g124123');

// C
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('Rocketseat/academy-facebook-auth');
Github.getRepositories('Rocketseat/dslkvmskv');

// D
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);

        console.log(response);
    } catch (error) {
        console.log('Usuário não existe.');
    }
}

buscaUsuario('diego3g');