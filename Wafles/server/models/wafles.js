const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    surname: { type: String, required: true},
    language: {type: String, required: true},
    pay: {type: Number, required: true}
});

module.exports = mongoose.model("wafles", schema);