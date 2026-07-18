const request = require('supertest')
const { app, server } = require('../../src/index')

afterAll(() => server.close())

describe('api integration', () => {
  it('root endpoint returns json', async () => {
    const res = await request(app).get('/')
    expect(res.headers['content-type']).toMatch(/json/)
    expect(res.status).toBe(200)
  })

  it('health check returns 200', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
  })

  it('unknown route returns 404', async () => {
    const res = await request(app).get('/unknown')
    expect(res.status).toBe(404)
  })
})
