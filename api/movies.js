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

router.get('/:id', function(req, res, next) {
  var callback = function(movie){
    res.send(movie);
  }
  
  var movieId=req.params.id;
 var movie=service.getMovieById(movieId,callback)
});


router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movie = req.body;
  var movieId=req.params.id;
  service.updateMovie(movie, callback);
});

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  service.deleteMovie(movieId,callback);
});


module.exports = router;
