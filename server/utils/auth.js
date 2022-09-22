//from module 21

const jwt = require("jsonwebtoken");
//here we created the secret 
const secret = "mysecretsshhhhh";
const expiration = "2h";
//here we module exports the auth middleware 
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
