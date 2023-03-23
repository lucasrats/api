const express = require('express');
const Model = require('../models/carta');

const router = express.Router()

//Post Method
router.post('/carta/post', async (req, res) => {
    const data = new Model({
        pack_code:   req.body.pack_code,
        pack_name:   req.body.pack_name,
        type_code:   req.body.type_code,
        type_name:   req.body.type_name,
        sphere_code: req.body.sphere_code,
        sphere_name: req.body.sphere_name,
        position:    req.body.position,
        code:        req.body.code,
        name:        req.body.name,
        traits:      req.body.traits,
        text:        req.body.text,
        flavor:      req.body.flavor,
        is_unique:   req.body.is_unique,
        threat:      req.body.threat,
        willpower:   req.body.willpower,
        attack:      req.body.attack,
        defense:     req.body.defense,
        health:      req.body.health,
        quantity:    req.body.quantity,
        deck_limit:  req.body.deck_limit,
        illustrator: req.body.illustrator,
        octgnid:     req.body.octgnid,
        has_errata:  req.body.has_errata,
        url:         req.body.url,
        imagesrc:    req.body.imagesrc,
        cost:        req.body.cost,
        victory:     req.body.victory,
        quest:       req.body.quest,
        copias:      req.body.copias
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/carta/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/carta/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//buscar una carta por code
router.get('/carta/getCardByCode/:code', async (req, res) => {
    try{
        const data = await Model.findOne({'code': req.params.code});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//buscar N cartas por code
router.get('/carta/getCardsByCode/:codes', async (req, res) => {
    try{
        const arrayCodes = req.params.codes.split(",");
        const data = await Model.find({ code: { $in: arrayCodes } });
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/carta/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/carta/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;