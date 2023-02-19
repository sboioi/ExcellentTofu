const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SoyMilkSchema = new Schema({

    tableNumber : {type:String},
    temperature: {type:String}, 
    beanChoice: {type:String},
    sweetness: {type:String},
    soyMilkSize: {type:String},
    toppings:[String],
    costs: {type: Number}
});

const SoyMilk = mongoose.model("SoyMilk", SoyMilkSchema);

module.exports = {
    SoyMilk,
    SoyMilkSchema
};