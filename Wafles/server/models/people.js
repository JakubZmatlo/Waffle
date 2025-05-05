const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    age: {type: Number, required: true}
});

module.exports = mongoose.model("People", schema);