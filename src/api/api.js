import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.7:3005/',
})

export const getWords = async (letter) => {
    const response = await instance.get('words/' + letter);
    return (response.data);
}

export const getWordProfile = async (word) => {
    const response = await instance.get('word/'+word);
    return (response.data);
}

