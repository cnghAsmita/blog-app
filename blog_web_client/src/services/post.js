import { getData, postData } from "./base";


async function fetchAllPosts() {
    const urlSuffix = '/posts'
    const response = await getData(urlSuffix);

    return response;
}


async function addPost({payload, token}) {
    const urlSuffix = '/posts/'
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    const response = await postData(urlSuffix, payload, headers);

    return response;
}

export {fetchAllPosts, addPost}