const router = require('express').Router()
const {getNotes} = require('../public/assets/js/index')
const db = require('../db/db.json')

router.get('/api/notes', (req, res)=> {
    let results = db
    if(req.query){
        results = getNotes(req.query, results)
    }
    res.json(results)
})

router.post('/api/')