const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secret = "mysecretssshhhhhhh";
const expiration = "2h";

const AuthenticationError = new GraphQLError("Could not authenticate user.", {
  extensions: {
    code: "UNAUTHENTICATED",
  },
});

const signToken = ({ email, name, _id }) => {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const validatePassword = async (user, password) => {
  try {
    return await user.isCorrectPassword(password);
  } catch (error) {
    console.error("Error validating password:", error);
    return false;
  }
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user || !(await validatePassword(user, password))) {
    throw AuthenticationError;
  }

  return user;
};

module.exports = {
  AuthenticationError,
  signToken,
  validatePassword,
  authenticateUser,
};
