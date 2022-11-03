const express = require("express");
const { findAll } = require("../models/User");
const router = express.Router();
const {User, Superpower} = require("../models");

// GET route
router.get("/", (req, res)=>{
    User.findAll({include: Superpower})
    .then((allUsers)=>{
        res.json(allUsers);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: err})
    })
})

// POST route
router.post("/", (req, res)=> {
    console.log(req.body)
    User.create(req.body)
    .then((newUser)=>{
        if (req.body.superpower_ids && req.body.superpower_ids.length > 0) {
            newUser.addSuperpowers(req.body.superpower_ids).then(response => {
                res.json(response)
            })
        } else {
            res.json(data)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({ error: err})
    })
})


module.exports = router;