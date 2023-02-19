const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const {SoyPuddingSchema } = require("../models/SoyPudding.js");
const {SoyMilkSchema } = require("../models/SoyMilk.js");
const {SnackSchema } = require("../models/Snack.js");

const TableNumberSchema = new Schema({
    tableNumber : {type:String},
    soyPuddings: [SoyPuddingSchema],
    soyMilk : [SoyMilkSchema],
    snack : [SnackSchema],
 });

const TableNumber = mongoose.model("TableNumber", TableNumberSchema);

module.exports = {
    TableNumber,
    TableNumberSchema
};