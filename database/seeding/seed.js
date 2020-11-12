const {sampleProduct} = require('./dummy-data.js');
const config = require('../../config.js');
const mongoose = require('mongoose');

const db = mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  images: [String],
  reg_price: Number,
  discount_price: Number,
});

const Product = mongoose.model('product', productSchema);

const seed = () => {
  const product = new Product(sampleProduct);

  product.save((err, product) => {
    if (err) return console.log(err)
    else {
      console.log('sampleProduct saved successfully');
      mongoose.connection.close();
    }
  });
}

Product.deleteMany({})
  .then(() =>{
    console.log('Data Deleted');
    seed();
  });