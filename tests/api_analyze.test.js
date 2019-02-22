const supertest=require('supertest')
const {app, server} =require('../index')
const bodyparser=require('body-parser')
const api=supertest(app)
app.use(bodyparser.json())

describe('Test the whole api without mocks', ()=> {
  test('api returns correct response with a word', async () => {
    await api
      .post('/analyze')
      .send({text:"Hello"})
      .expect({
        "textLength":{"withSpaces":5,"withoutSpaces":5},
        "wordCount":1,
        "characterCount":[{"e":1},{"h":1},{"l":2}, {"o":1}]
      })
    })
  test('api returns correct response with a sentence', async () => {
      await api
        .post('/analyze')
        .send({text:"Hello silence my old friend"})
        .expect({
          "textLength":{"withSpaces":27,"withoutSpaces":23},
          "wordCount":5,
          "characterCount":[{"c":1}, {"d":2}, {"e":4}, {"f":1}, {"h":1},{"i":2},{"l":4},{"m":1},{"n":2},{"o":2},{"r":1}, {"s":1},{"y":1}]
      })
  })
  test('api returns correct response with a sentnce with non-letters and scandis', async () => {
      await api
        .post('/analyze')
        .send({text:"Älköön @2pvä!"})
        .expect({
          "textLength":{"withSpaces":13,"withoutSpaces":12},
          "wordCount":2,
          "characterCount":[{"k":1}, {"l":1}, {"n":1}, {"p":1}, {"v":1}]
      })
  })
})
afterAll(()=>{
  server.close()
})
