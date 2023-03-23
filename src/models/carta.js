const mongoose = require('mongoose');

const cartaSchema = new mongoose.Schema({
    pack_code:   {
        type: String,
        required: true
    },
    pack_name:   {
        type: String,
        required: true
    },
    type_code:   {
        type: String,
        required: true
    },
    type_name:   {
        type: String,
        required: true
    },
    sphere_code: {
        type: String,
        required: true
    },
    sphere_name: {
        type: String,
        required: true
    },
    position:    {
        type: String,
        required: true
    },
    code:        {
        type: String,
        required: true
    },
    name:        {
        type: String,
        required: true
    },
    traits:      {
        type: String,
        required: true
    },
    text:        {
        type: String,
        required: true
    },
    flavor:      {
        type: String,
        required: true
    },
    is_unique:   {
        type: String,
        required: true
    },
    threat:      {
        type: Number,
        required: true
    },
    willpower:   {
        type: String,
        required: true
    },
    attack:      {
        type: String,
        required: true
    },
    defense:     {
        type: String,
        required: true
    },
    health:      {
        type: String,
        required: true
    },
    quantity:    {
        type: String,
        required: true
    },
    deck_limit:  {
        type: String,
        required: true
    },
    illustrator: {
        type: String,
        required: true
    },
    octgnid:     {
        type: String,
        required: true
    },
    has_errata:  {
        type: String,
        required: true
    },
    url:         {
        type: String,
        required: true
    },
    imagesrc:    {
        type: String,
        required: true
    },
    cost:        {
        type: String,
        required: true
    },
    victory:     {
        type: String,
        required: true
    },
    quest:       {
        type: String,
        required: true
    },
    copias:      {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Carta', cartaSchema);