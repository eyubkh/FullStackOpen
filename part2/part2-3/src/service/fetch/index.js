const url = 'http://192.168.0.165:3001/contacs/'

export const getAll = () => {
    return fetch(url).then(result => result.json())
}

export const newUser = (obj = {}) => {
    const response = fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

export const removeUser = (id) => {
    fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
} 

export const updateUser = (obj,id) => {
    fetch(`${url}/${id}` ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}
