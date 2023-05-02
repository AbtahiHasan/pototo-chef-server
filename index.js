const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, "./public")
console.log(publicPath)
app.use(express.static())

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(port, () => {
    console.log(`this server running at ${port}`)
})