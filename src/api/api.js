import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.6:4000/',
})

export let getWords = async (letter) => {
    const response = await instance.get('words/' + letter);
    return (response.data);
}

