const express = require("express")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const app = express()
const db = mongoose.connection

const PORT = process.env.PORT || 3000

const MONGODB_URI = process.env.MONGODB_URI ||
"mongodb://localhost:27017/unit2Project"

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on("open", () => {
    
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

app.get("/", (req,res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log("listening and...listening and...")
})

