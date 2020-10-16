const express = require('express')
const Worker = require('../models/signup_workers')
const router = new express.Router()


router.post('/workers', async (req, res) => {
    const worker = new Worker(req.body)
    
    try {
        await worker.save()
        
        const token = await worker.generateAuthToken()
        res.status(201).send({ worker, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
