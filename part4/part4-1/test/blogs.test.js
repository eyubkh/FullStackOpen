const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./helper/helper')
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  for (const i of helper.initialBlogs) {
    const blogObject = new Blog(i)
    await blogObject.save()
  }
})

describe('Test methods', () => {
  test('test method GET', async () => {
    await api
      .get('/api/blogs/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('test ERROR method GET', async () => {
    await api
      .get('/api/bl')
      .expect(404)
  })

  test('test method GET by ID', async () => {
    const blogs = await api.get('/api/blogs')
    const blogToView = blogs.body[0]._id

    await api
      .get(`/api/blogs/${blogToView}`)
      .expect('Content-Type', /application\/json/)
      .expect(200)
  })

  test('test method POST', async () => {
    const data = {
      title: 'testTitle',
      author: 'testAuthor',
      url: 'testUrl',
      likes: 1
    }
    await api
      .post('/api/blogs/')
      .send(data)
      .expect(200)
      .then(async (response) => {
        expect(response.body._id).toBeTruthy()
        expect(response.body.title).toBe(data.title)
        expect(response.body.author).toBe(data.author)

        const post = await Blog.findOne({ _id: response.body._id })
        expect(post).toBeTruthy()
        expect(post.title).toBe(data.title)
        expect(post.author).toBe(data.author)
      })
  })

  test('test ERROR method POST', async () => {
    const data = {
      title: { a: 1 },
      author: 'testAuthor',
      likes: 1
    }
    await api
      .post('/api/blogs')
      .send(data)
      .expect(500)
  })

  test('test method DELETE', async () => {
    const blog = await Blog.create({
      title: 'testDelete',
      author: 'delete',
      url: 'delete',
      likes: 0
    })

    await api
      .delete(`/api/blogs/${blog._id}`)
      .expect(204)
  })
})

describe('data checks ', () => {
  test('all blogs returned', async () => {
    const response = await api.get('/api/blogs/')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('first blog author antonio', async () => {
    const response = await api.get('/api/blogs/')
    expect(response.body[0].author).toContain(helper.initialBlogs[0].author)
  })

  test('check ids on every object', async () => {
    const response = await api.get('/api/blogs/')
    response.body.forEach(blog => {
      expect(blog._id).toBeDefined()
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})
