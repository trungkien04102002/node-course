const express = require('express')
const Test = require('../models/test')
const router = new express.Router()

router.post('/test', async (req,res) => {
    const test = new Test(req.body)
    try {
        await test.save()
        res.status(201).send(test)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/test', async (req,res) => {
    res.send("Success access Test path")
})

module.exports = router