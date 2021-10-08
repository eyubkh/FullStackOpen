const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')

const data = [
  {
    username: 'ayubkh',
    name: 'ayoub',
    password: '1234'
  }
]

beforeAll(async () => {
  await User.deleteMany({})

  for (const i of data) {
    const newUser = await User(i)
    newUser.save()
  }
})

describe('Testing Methods', () => {
  test('GET /api/users', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('POST /api/users', async () => {
    const data = {
      username: 'ayub.kh',
      name: 'ayoub kh',
      password: '1234'
    }
    await api
      .post('/api/users')
      .send(data)
      .expect(200)
  })
})

describe('Testing Errors Mothods', () => {
  test('GET Error /api/error', async () => {
    await api
      .get('/api/error')
      .expect(404)
      .expect(res => {
        expect(res.text).toContain('unknow Endpoint')
      })
  })
})

describe('Testing validation', () => {
  test('username or password less than 4 length error', async () => {
    const data = {
      username: 'ayu',
      name: 'ayoub kh',
      password: '12333'
    }
    await api
      .post('/api/users')
      .send(data)
      .expect(400)
      .expect(res => {
        expect(res.text).toContain('password or username less than 3 latters')
      })
  })

  test('unique username', async () => {
    const data = {
      username: 'ayubkh',
      name: 'ayoub kh',
      password: '12333'
    }
    await api
      .post('/api/users')
      .send(data)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
