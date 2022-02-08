const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const db = require('../db/db.json')
const fs = require('fs')


router.get('/api/notes', (req, res)=> {
    res.json(db)
})

router.post('/api/notes', (req, res)=> {
    
})
module.exports = router