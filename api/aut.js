import config from "../config/config";
let endpoint = config.EndPoint;

export async function login(params) {
    return new Promise(resolve => {
        const url = endpoint + "login/inicioLogin";
        const fetchParams = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
        fetch(url, fetchParams)            
            .then(response => response.json())
            .then(responseJson => {
                let res = null;
                if (responseJson.status == 200 && responseJson.msg == 'OK' && responseJson.response) {
                    res = responseJson.response;
                }
                else if (responseJson.status == 500) {
                    res = responseJson.response.error;
                }
                resolve(res);
            })
            .catch(err => {
                resolve(err);
            });
    });
}