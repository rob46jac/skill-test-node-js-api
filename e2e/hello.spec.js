const { test, expect } = require('@playwright/test')

test('root returns hello world', async ({ request }) => {
  const res = await request.get('/')
  expect(res.ok()).toBeTruthy()
  const body = await res.json()
  expect(body.message).toBe('Hello World')
})

test('health check is up', async ({ request }) => {
  const res = await request.get('/health')
  expect(res.ok()).toBeTruthy()
  const body = await res.json()
  expect(body.status).toBe('healthy')
})
