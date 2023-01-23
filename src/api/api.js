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

export const sendDream = async (dream) => {
    const response = await instance.post('dreams/', { email: dream.email, dream: dream.text });
    return (response.data);
}

export const getPrediction = async () => {
    const response = await instance.get('predictions/');
    return (response.data.prediction);
}