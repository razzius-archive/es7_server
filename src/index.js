import express from 'express'
import request from 'request'
import promisify from 'promisify-node'


const get = promisify(request.get)

async function razziNet() {
  const response = await get('http://abuissa.net')
  return response.body
}

const app = express()


app.get('/', async (req, res) => {
  res.send(await razziNet())
})


app.listen(3000)
