const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ "message_received": req.body }).status(200);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))