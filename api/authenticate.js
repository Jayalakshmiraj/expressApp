var express = require('express');
var router = express.Router();
var dbService = require('../services/dbService');

router.get('/:phone', function(req, res, next) {
	var callback = function(result){
	  res.send({'result':result});
	}
	var customerPhone = req.params.phone;
	dbService.getCustomerPassword(customerPhone,callback);
  });

module.exports = router;
