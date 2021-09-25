var jwt = require('jsonwebtoken');
var config = require('./config/jwt_config');

function verifytoken(req, res, next) {
	
  var token = req.headers['x-access-token'] || req.headers['authorization']; 
  token = token.replace(/^Bearer\s+/, "");
  if (!token)
    return res.status(403).send({'status':false, 'message': "No token provided", 'data':""});
    
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({'status':false, 'message': "Failed to authenticate token.", 'data':""});
      
    // if everything good, save to request for use in other routes
    req.loginUserId = decoded.loginUserId;
    next();
  });
}

module.exports = verifytoken;