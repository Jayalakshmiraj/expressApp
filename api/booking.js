var express = require('express');
var router = express.Router();
var service=require('../services/movieDBservice');

// var bookingList=[{id:1,name:"Bahubali 2",year:2017}]

router.get('/:id', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    var movieid = req.params.id;
    service.getBooking(movieid,callback);
  });

module.exports = router;
