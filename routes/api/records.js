const express = require('express')
const router = express.Router()
const config = require('config')

// Records Model
const Record = require('../../models/Record')

//let records = {};

// @route   POST api/records
// @desc    Make a new record of a module
// @access  Public
router.post('/', (req, res) => {
    email = req.body.email;
    records = req.body.data;

    // Validation
    if(!records || !email){
        return res.status(400).json({
            msg: 'Please fill all the fields.'
        })
    }

    // Check if any records exist with the given email
    Record.findOne({ email })
        .then(user => {
            if(user){
                // Add the new record
                console.log(user);
                user.records.push(records);
                user.save();
            }else {
                const newRecord = new Record({
                    email,
                    records
                })
                newRecord.save()
                        .then(user => {
                            console.log("saved")
                        })
                        .catch(err => {
                            console.log(err)
                        })
            }
        })
})

// @route   GET api/records
// @desc    Get records
// @access  Public
router.post('/:email', (req, res) => {
    if(records[req.params.email] === undefined){
        res.json([])
    } else {
        res.json(records[req.params.email])
    }
})



module.exports = router