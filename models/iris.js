const mongoose = require("mongoose");

const irisSchema = new mongoose.Schema({
    sepalLength:{
        type: Number,
        required: true
    },
    sepalWidth:{
        type: Number,
        required: true
    }
},{
    timestamps:true
});

const Iris = mongoose.model('Iris',irisSchema);

module.exports = Iris;