import { postData } from "./base";


async function register({payload}) {
    const urlSuffix = '/auth/register'
    const response = await postData(urlSuffix, payload);

    return response;
}

async function login({payload}) {
    const urlSuffix = '/auth/login'
    const response = await postData(urlSuffix, payload);

    return response;
}

export {register, login};