import axios from "axios";
import { BACKEND_HOST, BACKEND_HOST_FOR_LAST_2 } from "../constants"

export const EAI = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/assistant/eai`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(body)
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}

export const PROJECT = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/assistant/project`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(body)
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}

export const CB_POLICY = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/assistant/cb_policy`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(body)
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}

export const NEWSLETTER = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/tools/newsletter?topic=${body.message}`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}


export const SOCIAL = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/tools/social`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: body
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}


export const EMPA_SCANNER = async (body) => {

    const response = await fetch(`${BACKEND_HOST}/empa/scanner`, {
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(body)
    })


    const res = await response.json()
    if (response.status === 200)
        return res;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}


export const RISK = async (text) => {

    const response = await fetch(`${BACKEND_HOST_FOR_LAST_2}/riskText`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({prompt:text})
    })


    const res = await response.json()
    if (response.status === 200)
        return res.response;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}


export const RISKFILE = async (file) => {
    const fd = new FormData();
    fd.append('file', file);

    // Generate a random boundary string
    const boundary = Math.random().toString().substr(2);
    
    // Set the Content-Type header with the boundary parameter
    const headers = new Headers();
    headers.append('Content-Type', `multipart/form-data; boundary=${boundary}`);
    headers.append('maxBodyLength', `Infinity`);
    headers.append('Authorization', localStorage.getItem('access_token'));

    const response = await fetch(`${BACKEND_HOST_FOR_LAST_2}/riskFile`, {
        method: 'POST',
        headers: headers,
        body: fd
    });

    const res = await response.json();
    if (response.status === 200)
        return res.message;
    else if (response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
    }
    else
        throw new Error(res.details);
}


export const RECOMMENDER = async (text) => {

    const response = await fetch(`${BACKEND_HOST_FOR_LAST_2}/recommenderText`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({prompt:text})
    })


    const res = await response.json()
    if (response.status === 200)
        return res.response;
    else if (response.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }
    else
        throw new Error(res.details)
}


export const RECOMMENDERFile = async (file) => {
    const fd = new FormData();
    fd.append('file', file);

    // Generate a random boundary string
    const boundary = Math.random().toString().substr(2);
    
    // Set the Content-Type header with the boundary parameter
    const headers = new Headers();
    headers.append('Content-Type', `multipart/form-data; boundary=${boundary}`);
    headers.append('maxBodyLength', `Infinity`);
    headers.append('Authorization', localStorage.getItem('access_token'));

    const response = await fetch(`${BACKEND_HOST_FOR_LAST_2}/recommenderFile`, {
        method: 'POST',
        headers: headers,
        body: fd
    });

    const res = await response.json();
    if (response.status === 200)
        return res.message;
    else if (response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
    }
    else
        throw new Error(res.details);
}


export const TRANSLATE = async (body) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BACKEND_HOST}/tools/translate`,
        headers: {
            'accept': 'application/json',
            'Authorization': `${localStorage.getItem('access_token')}`,
        },
        data: body
    };

    try {
        const response = await axios.request(config);

        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;

        let fileName = 'translated_file';

        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
            fileName = contentDisposition.split('filename=')[1].trim();
        }

        a.download = fileName;

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);

        if (response.status === 200)
            return response.data;
        else if (response.status === 401) {
            localStorage.clear();
            window.location.href = '/';
        }
        else
            throw new Error(response.data.details);
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
};