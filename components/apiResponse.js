const {lengthWithSpaces, lengthWithoutSpaces, wordCount, letterCount}= require('../actions/analyze')

const collect=(word)=>{
  return {
    textLength: {
      withSpaces: lengthWithSpaces(word),
      withoutSpaces: lengthWithoutSpaces(word)
    },
    wordCount: wordCount(word),
    characterCount: letterCount(word)
  }
}

module.exports={collect}
