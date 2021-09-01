const URL = 'http://localhost:3001/api/contacts/'

export const getAll = () => {
    return fetch(URL)
        .then( res => res.json())
}

export const addOne = (data) => {
    return fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const deletOne = (id) => {
    fetch(`${URL}${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
    
}