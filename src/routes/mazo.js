const express = require('express');
const Model = require('../models/mazo');

const router = express.Router()

//Post Method
router.post('/mazo/nuevo', async (req, res) => {
    const data = new Model({
        name:   req.body.name,
        date_creation:   req.body.date_creation,
        date_update:   req.body.date_update,
        description_md:   req.body.description_md,
        user_id:   req.body.user_id,
        heroes:   req.body.heroes,
        slots:   req.body.slots,
        sideslots:   req.body.sideslots,
        version:   req.body.version,
        last_pack:   req.body.last_pack,
        freeze_comments:   req.body.freeze_comments,
        is_published:   req.body.is_published,
        nb_votes:   req.body.nb_votes,
        nb_favorites:   req.body.nb_favorites,
        nb_comments:   req.body.nb_comments,
        starting_threat:   req.body.starting_threat
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/mazo/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/mazo/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/mazo/update/:id', async (req, res) => {
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

router.delete('/mazo/delete/:id', async (req, res) => {
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