const apiResponse=require('../components/apiResponse')
jest.mock('../actions/analyze')
describe('test the response collect component with a mock', ()=> {
  test('return correct response', () => {
    const response=apiResponse.collect()
    expect(response).toEqual({
        textLength: {
          withSpaces: 11,
          withoutSpaces: 10
        },
        wordCount: 2,
        characterCount: [{d:1},{e:1},{h:1}, {l:3}, {o:2}, {r:1}, {w:1}]
      })
  })
})
