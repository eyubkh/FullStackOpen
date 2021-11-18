let userToken = ''

export const setToken = (token) => {
  userToken = `Bearer ${token}`
}

export const loginAuth = (obj) => {
  return window.fetch('http://localhost:3001/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(result => result.json())
    .then(data => data)
}

export const userData = (username) => {
  return window.fetch(`http://localhost:3001/api/users/${username}`)
    .then(result => result.json())
    .then(data => data)
}

export const userPost = (obj) => {
  return window.fetch('http://localhost:3001/api/blogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userToken
    },
    body: JSON.stringify(obj)
  })
    .then(result => result.json())
    .then(data => data)
}

export const getBlog = (id) => {
  return window.fetch(`http://localhost:3001/api/blogs/${id}`)
    .then(result => result.json())
    .then(data => data)
}

export const getAllUsers = async () => {
  return await window.fetch('http://localhost:3001/api/users/')
    .then(result => result.json())
    .then(data => data)
}
