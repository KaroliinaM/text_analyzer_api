const analyzer=require('../actions/analyze')

test('return word length', ()=> {
  const word=analyzer.lengthWithSpaces('hello')
  expect(word).toBe(5)
  const sentence=analyzer.lengthWithSpaces('one step beyond')
  expect(sentence).toBe(15)
})
test('return length without spaces', () => {
  const word=analyzer.lengthWithoutSpaces('hello')
  expect(word).toBe(5)
  const sentence=analyzer.lengthWithoutSpaces('one step beyond')
  expect(sentence).toBe(13)
})
test('return word count', ()=> {
  const words=analyzer.wordCount('one step beyond')
  expect(words).toBe(3)
})
test('return letter count', ()=>{
  const result=analyzer.letterCount('heiii')
})
