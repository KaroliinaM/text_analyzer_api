const http=require('http')
const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.json())

app.post('/', (req, res) => {
  const note=req.body

  console.log(note)
  res.json(req.body)
})
app.get('/test', (req, res) => {
  res.send('<h1>Hello Wold</h1>')
})

const server=http.createServer(app)

const PORT=process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports={
  app, server
}
