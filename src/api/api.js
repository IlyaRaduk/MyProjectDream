import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3005/',
})

export const getWords = async (letter) => {
    if (!letter) {
        const response = await instance.get('words/');
        return (response.data);
    }
    const response = await instance.get('words/' + letter);
    return (response.data);
}