const express = require("express")
const app = express()

app.get('/', (req,res) => {
    res.send('Hello from Nodejs server')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
})