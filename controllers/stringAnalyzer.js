const apiRouter=require('express').Router()
const WordAnalyzer=require('../components/apiResponse')

apiRouter.post('/', async (req, res) => {
  try
  {
    const sentence=req.body
    if(sentence.text === undefined) {
      return res.status(400).json({ error: 'bad request' })
    }
    const result=await WordAnalyzer.collect(sentence.text)
    res.json(result)
  } catch(exception) {
    console.log(exception)
    res.status(500).json({error: 'error: something wrong'})
  }
})

module.exports=apiRouter
