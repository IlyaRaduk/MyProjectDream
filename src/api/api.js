import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3005/',
})

export const getWords = async (letter, page=1) => {
    if (!letter) {
        const response = await instance.get(`words?page=${page}`);
        return ({data:response.data, total: response.headers['x-total-count']});
    }
    letter= letter[0].toUpperCase() + letter.slice(1);
    const response = await instance.get(`words?page=${page}&letter=${letter}`);
    return ({data:response.data, total: Number(response.headers['x-total-count'])});
}

export const sendDream = async (dream) => {
    const response = await instance.post('dreams/', { email: dream.email, dream: dream.text });
    return (response.data);
}

export const getPrediction = async () => {
    const response = await instance.get('predictions/');
    return (response.data.prediction);
}