const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SoyPuddingSchema = new Schema({

    tableNumber : {type:String},
    temperature: {type:String}, 
    toppings:[String],
    costs: {type: Number}

});

const SoyPudding = mongoose.model("SoyPudding", SoyPuddingSchema);

module.exports = {
    SoyPudding,
    SoyPuddingSchema
};