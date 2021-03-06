const apiRoutes = require('./apiRoutes/apiRoutes')
const htmlRoutes = require('./htmlRoutes/htmlRoutes')
const express = require('express')
const PORT = process.env.PORT || 3001 
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
//middleware for routing
app.use(apiRoutes)
app.use(htmlRoutes)

// est. server port 
app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}!`)
})