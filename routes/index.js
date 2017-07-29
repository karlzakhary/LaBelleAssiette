var express = require('express');
var router = express.Router();

require('./ingredient')(router);

module.exports = router;