import axios from 'axios';

const getUserInfo = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    } catch (err) {
        console.warn(`Erro na API: ${err}`);
    }
};

getUserInfo('diego3g');
getUserInfo('diego3g3');