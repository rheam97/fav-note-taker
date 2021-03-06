const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
let db = require('../db/db.json')
const fs = require('fs')

// return db in response
router.get('/api/notes', (req, res)=> {
 res.json(db)
   
})
// add new note with body properties and unique id to the db and return updated db
router.post('/api/notes', (req, res)=> {
    req.body.id = uuidv4()
   const {title, text, id} = req.body
    const newNote ={
        title,
        text,
        id
    }
        db.push(newNote)
        fs.writeFileSync('db/db.json', JSON.stringify(db))
        res.json(db)
})
// create new db without note with id of deleted note
router.delete('/api/notes/:id', (req, res)=> {
    const gone = req.params.id
    db = db.filter(note=> note.id!== gone)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)

})
module.exports = router