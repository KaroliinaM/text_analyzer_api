const supertest=require('supertest')
const {app, server} =require('../index')
const bodyparser=require('body-parser')
const api=supertest(app)
const data={"text": "Return a mock"}
app.use(bodyparser.json())
jest.mock('../components/apiResponse')
test('api responds', async () => {
  await api
    .post('/analyze')
    .send(data)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('api returns the correct response', async () => {
  await api
    .post('/analyze')
    .send(data)
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect({
      textLength: { withSpaces: 11, withoutSpaces: 10 },
      wordCount: 2,
      characterCount:[ { d: 1 },{ e: 1 },{ h: 1 },{ l: 3 },{ o: 2 },{ r: 1 },{ w: 1 } ]
    })
})
test('empty send triggers an error', async () => {
  await api
    .post('/analyze')
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

afterAll(()=>{
  server.close()
})
