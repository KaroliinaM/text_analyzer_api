const http=require('http')
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const apiRouter=require('./controllers/stringAnalyzer')
const config=require('./utils/config')
//const WordAnalyzer=require('./components/apiResponse')

app.use(bodyparser.json())
app.use('/analyze', apiRouter)
app.use(cors())

// app.post('/analyze', (req, res) => {
//   const sentence=req.body
//   if(sentence.text === undefined) {
//     return res.status(400).json({ error: 'bad request' })
//   }
//   const result=WordAnalyzer.collect(sentence.text)
//   res.json(result)
// })
app.get('/test', (req, res) => {
  res.send('<h1>Hello Wold</h1>')
})

const server=http.createServer(app)

//const PORT=process.env.PORT || 3001

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

module.exports={
  app, server
}
