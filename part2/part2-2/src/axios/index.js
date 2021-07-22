export const Connection = (url) => {
     return fetch(url)
        .then(result => result.json())
        .then(res => res)
}