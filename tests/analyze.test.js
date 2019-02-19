const analyzer=require('../actions/analyze')
describe('string length with spaces', ()=> {
  test('return word length', ()=> {
    const word=analyzer.lengthWithSpaces('hello')
    expect(word).toBe(5)

  })
  test('return sentence length', ()=> {
    const sentence=analyzer.lengthWithSpaces('One step beyond.')
    expect(sentence).toBe(16)
  })
  test('empty string length', ()=> {
    const sentence=analyzer.lengthWithSpaces('')
    expect(sentence).toBe(0)
  })
  test('whitespace length', ()=> {
    const sentence=analyzer.lengthWithSpaces(' ')
    expect(sentence).toBe(1)
  })
})
describe('string length without spaces', ()=> {
  test('return word length', () => {
    const word=analyzer.lengthWithoutSpaces('hello')
    expect(word).toBe(5)
  })
  test('return sentence length', ()=> {
    const sentence=analyzer.lengthWithoutSpaces('One step beyond.')
    expect(sentence).toBe(14)
  })
  test('empty string length', ()=> {
    const sentence=analyzer.lengthWithoutSpaces('')
    expect(sentence).toBe(0)
  })
  test('whitespace length', ()=> {
    const sentence=analyzer.lengthWithoutSpaces(' ')
    expect(sentence).toBe(0)
  })
})
describe('word count', ()=> {
  test('return word count in a word', ()=> {
    const words=analyzer.wordCount('hello')
    expect(words).toBe(1)
  })
  test('return word count in a sentence', ()=> {
    const words=analyzer.wordCount('One step beyond.')
    expect(words).toBe(3)
  })
  test('return word count in a empty string', ()=> {
    const words=analyzer.wordCount('')
    expect(words).toBe(0)
  })
  test('return word count in a whitespace', ()=> {
    const words=analyzer.wordCount(' ')
    expect(words).toBe(0)
  })
})
describe('return correct letter count', ()=> {
  test('return correct letter count in one word', ()=>{
    const result=analyzer.letterCount('hello')
    expect(result).toEqual(expect.arrayContaining([{"e": 1},{"h": 1},{"l": 2},{"o": 1}]))
  })
  test('return correct letter count in two words', ()=>{
    const result=analyzer.letterCount('hello world')
    expect(result).toEqual(expect.arrayContaining([{"d": 1},{"e": 1},{"h": 1},{"l": 3},{"o": 2},{"r": 1},{"w": 1}]))
  })
  test('return letters in correct order', ()=> {
    const result=analyzer.letterCount('hello')
    expect(result).toEqual(expect.arrayContaining([{"h": 1},{"e": 1},{"l": 2},{"o": 1}]))
    expect(result).not.toEqual([{"h": 1},{"e": 1},{"l": 2},{"o": 1}])
    expect(result).toEqual([{"e": 1},{"h": 1},{"l": 2},{"o": 1}])
  })
  test('capital letters are counted', ()=> {
    const result=analyzer.letterCount('Hello')
    expect(result).toEqual([{"e": 1},{"h": 1},{"l": 2},{"o": 1}])
  })
  test('non-letter chars are ignored', ()=> {
    const result=analyzer.letterCount('Hello! 2 world :)')
    expect(result).toEqual([{"d": 1},{"e": 1},{"h": 1},{"l": 3},{"o": 2},{"r": 1},{"w": 1}])
  })
  test('non-english letters are ignored', ()=> {
    const result=analyzer.letterCount('Ääkkösiä')
    expect(result).toEqual([{"i": 1},{"k": 2},{"s": 1}])
  })
  test('works with an empty string', () => {
    const result=analyzer.letterCount('')
    expect(result).toEqual([])
  })
})
