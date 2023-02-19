const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SnackSchema = new Schema({

    tableNumber : {type:String},
    snackItem: [String],
    costs: [Number]
});

const Snack = mongoose.model("Snack", SnackSchema);

module.exports = {
    Snack,
    SnackSchema
};