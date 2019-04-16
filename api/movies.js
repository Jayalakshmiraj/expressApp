var express = require('express');
var router = express.Router();
var service=require('../services/movieDBservice')



router.get('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    service.getMovies(callback);
  });

// // router.get('/', function(req, res, next) {
// //     res.send(movieList);
// // });
// //     router.get('/:id', function(req, res, next) {
// //         res.send(movieList); 

// });
router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movie = req.body;
  service.addMovie(movie, callback);
});
router.put('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movie = req.body;
  service.putMovie(movie, callback);
});

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  service.deleteMovie(movieId,callback);
});


module.exports = router;
