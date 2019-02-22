const apiRouter=require('express').Router()
const WordAnalyzer=require('../components/apiResponse')

apiRouter.post('/', (req, res) => {
  const sentence=req.body
  if(sentence.text === undefined) {
    return res.status(400).json({ error: 'bad request' })
  }
  const result=WordAnalyzer.collect(sentence.text)
  res.json(result)
})

module.exports=apiRouter
