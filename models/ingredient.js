var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    available:String
});


module.exports = mongoose.model('Ingredient', ingredientSchema);