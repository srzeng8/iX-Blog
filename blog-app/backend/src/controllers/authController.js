const bcrypt = require("bcryptjs");

const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { firstName, lastName, bio, email, password } = req.body;
    //check payload
    if (!firstName || !lastName || !email || !bio || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      firstName,
      lastName,
      email,
      bio,
      password: hashedPassword,
    });
    const newUser = await user.save();
    let resUser = newUser.toJSON();
    delete resUser.password;

    //TODO:
    // Generate JWT token and add it to the payload response

    res.status(201).json({ message: "Registration complete", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check payload
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User does not exist" });
      return;
    }
    // check hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ message: "Invalid credentials", data: [] });
      return;
    }
    let resUser = user.toJSON();
    delete resUser.password;
    res.status(200).json({ message: "Login successful!", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

module.exports = {
  register,
  login,
};