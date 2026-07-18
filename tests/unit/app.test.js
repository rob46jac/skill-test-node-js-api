const request = require('supertest')
const { app, server } = require('../../src/index')

afterAll(() => server.close())

describe('GET /', () => {
  it('returns hello world', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello World')
    expect(res.body.status).toBe('ok')
  })
})

describe('GET /health', () => {
  it('responds with healthy status', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('healthy')
  })
})
