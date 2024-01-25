

async function postData(urlSuffix, data = {}, headers={}) {
    let url = process.env.REACT_APP_BASE_URL + urlSuffix

    if (!headers){
        headers = {
            "Content-Type": "application/json",
        }
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const json = await response.json();
        if (!response.ok){
            return Promise.reject(json)
        }
        return json;
    } catch (error) {
        console.error(`error: ${error.message}`)
    }
}


export {postData};