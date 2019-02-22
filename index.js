const http=require('http')
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const apiRouter=require('./controllers/stringAnalyzer')
const config=require('./utils/config')

app.use(bodyparser.json())
app.use('/analyze', apiRouter)
app.use(cors())

app.get('/test', (req, res) => {
  res.send('<h1>Hello Wold</h1>')
})

const server=http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

module.exports={
  app, server
}
