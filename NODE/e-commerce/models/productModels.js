const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => {return this._id}, 
      },
    name: String,
    price: Number,
    category:String
})
const Product = mongoose.model('productdetails', productSchema);

module.exports ={
    Product
}