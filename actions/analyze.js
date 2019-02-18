const lengthWithSpaces=(word)=>{
  return word.length
}

const lengthWithoutSpaces=(word)=>{
  return lengthWithSpaces(word) - (wordCount(word) -1)
}
const wordCount=(word)=>{
  return word.split(' ').length
}
const letterCount=(word)=> {
  const letters=new Map()
  let ret=[]
  word=word.replace(/[^a-zA-Z]/g,'').toLowerCase()
  console.log(word)
  word.split('').forEach(l => {
    letters.has(l)? letters.set(l, letters.get(l)+1): letters.set(l, 1)
  })
  Array.from(letters.keys()).sort().forEach((l)=> {
    ret.push({[l]: letters.get(l)})
  })
  console.log(ret)
  return ret
}

module.exports={
  lengthWithSpaces,
  lengthWithoutSpaces,
  wordCount,
  letterCount
}
