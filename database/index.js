const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bearslist');
const db = mongoose.connection;
// mongoose.Promise = global.Promise;

db.once('open', ()=> {
  console.log('Connected to the Bearslist DB');
});

const BearSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  description: String,
})

const Bear = mongoose.model('Bear', BearSchema);

module.exports = { Bear }

// Uncomment to drop your db;
// Bear.db.dropDatabase();