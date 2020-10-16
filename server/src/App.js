const express = require('express')
require('./db/mongoose')
const workerRouter = require('./routers/signup_workers')

const app = express()

const port = process.env.PORT || 3000

app.get('*', (req, res) => {
    res.send("Hello world")
})

app.use(express.json())
app.use(workerRouter)

app.listen(port, () => {
    console.log('Server is up on the port ' + port)
})