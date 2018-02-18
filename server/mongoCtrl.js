const db = require("../database")

module.exports = {
  bears: {
    get: function getBears(req, res) {
      console.log('entering getbear logic')
      db.Bear.find({}, function(err, data) {
        // console.log(data)
        if (err) {console.log(err)}
        res.status(200).send(data);
      })
    },
    post: function newBear(req, res) {
      var newBear = new db.Bear;
      newBear.name = req.body.name;
      newBear.description = req.body.description;
      newBear.image = req.body.image;
      newBear.save(function (err, newBear){
        if (err) return console.log(err);
        console.log('Bear added to db successfully!: ', newBear)
      })
      res.status(200).send(newBear)
    }
  },

  favorites: {
    get: function getFavs(req, res) {
      res.status(200).send({})
    },
    post: function newBear(req, res) {
      res.status(200).send({})
    }
  }
}