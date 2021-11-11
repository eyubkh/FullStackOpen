const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')
const Blog = require('../models/blog')

const data = [
  {
    url: 'http://www.ayubkh.com/post1',
    title: 'Como ser programador',
    author: 'ayoub kh'
  },
  {
    url: 'http://www.ayubkh.com/post2',
    title: 'Curso FullStack',
    author: 'midudev'
  }
]

beforeAll(async () => {
  await Blog.deleteMany({})

  for (const i of data) {
    const newBlog = await new Blog(i)
    newBlog.save()
  }
})

describe('Testing Methods', () => {
  test('GET /api/blogs', async () => {
    await api
      .get('/api/blogs/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('POST /api/blogs', async () => {
    const data = {
      url: 'http://www.ayubkh.com/postTest',
      title: 'POST TEST',
      author: 'TEST'
    }
    await api
      .post('/api/blogs/')
      .send(data)
      .expect(200)
  })
})

describe('Testing Errors', () => {
  test('GET Error /api/blogs', async () => {
    await api
      .get('/api/error')
      .expect(404)
  })
  test('POST Error /api/blogs', async () => {
    const data = {
      url: { url: 'http://www.ayubkh.com/postTest' },
      title: 'POST TEST',
      author: 'TEST'
    }
    await api
      .post('/api/blogs')
      .send(data)
      .expect(401)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
