const userSchema = require("../models/userModel");
const { sendResetPasswordEmail } = require("../helpers/sendMail");
const jwt = require("jsonwebtoken");
const {
  createRefreshToken,
  createAccessToken,
} = require("../helpers/createToken");
const bcrypt = require("bcrypt");

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
        .json({ message: "Password must be at least 6 characters." });
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
    res.status(500).json({ message: "error" });
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
    res.status(200).json({ message: "Sign in success." });
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

      //get the user id found on the cookie
      const accessToken = createAccessToken({ id: user.id });
      return res.status(200).json({ token: accessToken });
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
    const url = `http://localhost:3000/account/reset-password/${accessToken}`;
    sendResetPasswordEmail(email, url);
    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {}
};

exports.userInfo = async (req, res) => {
  try {
    const user = await userSchema.findById(req.user.id).select("-password");
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userResetPassword = async (req, res) => {
  try {
    //get password
    const { password } = req.body;

    //hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    //Update password. req.user.id is from the middleware auth
    await userSchema.findOneAndUpdate(
      { id: req.user.id },
      { password: hashedPassword }
    );

    //reset success
    res.status(200).json({ message: "Successfully changed password." });
    req;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userLogout = async (req, res) => {
  try {
    // clear cookie
    res.clearCookie("rfToken", { path: "/account/access" });
    // success
    return res.status(200).json({ message: "Signout success." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
