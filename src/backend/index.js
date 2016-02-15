/**
* src/backend/index.js
*/

import express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('_dist/public'))

app.listen(port, function () {
  console.log('Start engine. Listening on port: ' + port)
})