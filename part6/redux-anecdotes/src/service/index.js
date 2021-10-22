const URL = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await fetch(URL)
    .then(response => response.json())
  return response
}

export const createNote = async (content) => {
  const object = { content, votes: 0 }
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object)
  }).then(response => response.json())
  return response
}

export const voteNote = async (object) => {
  const newObject = { ...object, votes: object.votes + 1 }
  const response = await fetch(`${URL}/${object.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObject)
  }).then(response => response.json())
  return response
}
