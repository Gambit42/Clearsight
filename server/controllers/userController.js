const userSchema = require("../models/userModel");
const { sendResetPasswordEmail } = require("../helpers/sendMail");
const jwt = require("jsonwebtoken");
const {
  createRefreshToken,
  createAccessToken,
} = require("../helpers/createToken");

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //Check if fields are empty. If empty return error 400

    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill in all the fields." });
    }

    //Check if user email already exist

    const user = await userSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already in use." });
    }

    //Check password length

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    }

    const newUser = await userSchema.create({
      firstName,
      lastName,
      email,
      password,
    });

    newUser.save();

    res.status(200).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if email exist
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Wrong email or password." });
    }

    //check if password matches
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Wrong email or password." });
    }

    //refresh token
    const refreshToken = createRefreshToken({ id: user._id });
    res.cookie("rfToken", refreshToken, {
      httpOnly: true,
      path: "/account/access",
      maxAage: 24 * 60 * 60 * 1000, // 24h
    });

    // signin success
    res.status(200).json({ message: "Sign in success.", token: refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userAccess = async (req, res) => {
  try {
    // check if there is a refresh token

    const refreshToken = req.cookies.rfToken;
    if (!refreshToken) {
      return res.status(400).json({ msg: "Please sign in." });
    }

    //validate

    jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Please sign in again." });
      }

      console.log(user);

      //get the user id found on the cookie
      const accessToken = createAccessToken({ id: user.id });
      return res.status(200).json({ accessToken });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.userForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    //Check if email exist
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not registered." });
    }

    //create an access token
    const accessToken = createAccessToken({ id: user.id });

    //send email
    const url = `http://localhost:3000/account/forgot-password/${accessToken}`;
    sendResetPasswordEmail(email, url);
    // console.log(user.id);
    // console.log(user._id);
    return res.status(200).json({ message: "Please check your email." });
  } catch (error) {}
};
