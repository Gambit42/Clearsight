const jwt = require("jsonwebtoken");

exports.createRefreshToken = (id) => {
  return jwt.sign(id, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "30d",
  });
};

exports.createAccessToken = (id) => {
  return jwt.sign(id, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "24H",
  });
};

// exports.createAccessToken = (id) =>{

// }
