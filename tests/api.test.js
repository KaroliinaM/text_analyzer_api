const supertest=require('supertest')
const {app, server} =require('../index')
const api=supertest(app)

test('api responds', async () => {
  await api
    .post('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(()=>{
  server.close()
})
