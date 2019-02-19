const lengthWithSpaces=(word)=>{
  return word.length
}

const lengthWithoutSpaces=(word)=>{
  return word.replace(/\s/g,'').length
}
const wordCount=(word)=>{
  return word.split(' ').filter( sentence=>sentence.length > 0 ).length
}
const letterCount=(word)=> {
  const letters=new Map()
  let charCount=[]
  word.replace(/[^a-zA-Z]/g,'').toLowerCase().split('').forEach(l => {
    letters.has(l)? letters.set(l, letters.get(l) + 1) : letters.set(l, 1)
  })
  Array.from(letters.keys()).sort().forEach((l) => charCount.push({[l] : letters.get(l)}))
  return charCount
}

module.exports={
  lengthWithSpaces,
  lengthWithoutSpaces,
  wordCount,
  letterCount
}
