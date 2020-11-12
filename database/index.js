const config = require('../config.js');
const mongoose = require('mongoose');
const sampleProduct = require('./seeding/dummy-data.js');

const db = mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// const imageSchema = mongoose.Schema({
//   url: String,
//   desc: String
// });

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  images: [String],
  reg_price: Number,
  discount_price: Number,
});

const Product = mongoose.model('ProductImage', productSchema);

const seed = () => {
  Product.deleteMany({});
  const product = new Product(sampleProduct);

  product.save((err, product) => {
    if (err) return console.log(err)
    else console.log('sampleProduct saved successfully');
  });
}

const getProductData = (callback, id) => {
  Product.where({ id }).findOne((err, product) => {
    if (err) callback(err);
    else callback(null, product)
  })
}

module.exports = {
  getProductData,
  seed
};