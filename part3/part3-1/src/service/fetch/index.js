const url = 'https://warm-bastion-30668.herokuapp.com/api/persons/'

export const getAll = () => {
    return fetch(url).then(result => result.json())
}

export const newUser = (obj = {}) => {
    fetch(url , {
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
    fetch(`${url}${id}` ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}
