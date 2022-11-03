const express = require("express");
const router = express.Router();
const {User, Superpower} = require("../models");

// GET route
router.get("/", (req, res)=>{
    Superpower.findAll({include: User})
    .then((allSuperpowers)=>{
        res.json(allSuperpowers);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: err})
    })
})

// POST route
router.post("/", (req, res)=> {
    console.log(req.body)
    Superpower.create(req.body)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({ error: err})
    })
})


module.exports = router;