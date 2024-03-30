const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Create a new user
exports.register = async (req, res) => {
  // Validate request
  if (!req.body.email) {
    console.log(req);
    return res.status(400).send({
      message: "User email cannot be empty",
    });
  }

  // Check if the email and username already exist
  try {
    const existingUser = await User.findOne({
      $or: [
        { email: req.body.email },
        { username: req.body.username },
        { cin: req.body.cin },
      ],
    });

    if (existingUser) {
      return res.status(400).send({
        message: "User already exists",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Error checking for existing user",
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Create a User
  const user = new User({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    cin: req.body.cin,
    image: req.body.image,
    birthdate: req.body.birthdate,
    roles: req.body.roles,
  });

  // Save User in the database
  try {
    const savedUser = await user.save();
    res.status(200).send({
      message: "User registered successfully!",
      data: savedUser,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Some error occurred while creating the User.",
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  await User.find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Get User by id
exports.getUserById = async (req, res) => {
  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};

// Get User by email
exports.getUserByEmail = async (req, res) => {
  await User.findOne({ email: req.params.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with email " + req.params.email,
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with email " + req.params.email,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with email " + req.params.email,
      });
    });
};

// Get User by username
exports.getUserByUsername = async (req, res) => {
  await User.findOne({ username: req.params.username })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with username " + req.params.username,
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with username " + req.params.username,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with username " + req.params.username,
      });
    });
};

// Update User by id
exports.updateUserById = async (req, res) => {
  const user = req.body;
  // Find user and update it with the request body
  await User.findByIdAndUpdate(req.params.id, user, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.id,
      });
    });
};

// Delete User by id
exports.deleteUserById = async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.status(200).send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.id,
      });
    });
};

// Login User with jwt token generation
exports.login = async (req, res) => {
  // check the existence of the email and password
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "User email or password can not be empty",
    });
  }
  // find the user with the email and compare the password with the hashed password (bcrypt)
  const userExistance = await User.find({ email: req.body.email });
  if (userExistance.length === 0) {
    return res.status(400).send({
      message: "User does not exist",
    });
  }
  const passwordMatch = await bcrypt.compare(
    req.body.password,
    userExistance[0].password
  );
  if (!passwordMatch) {
    return res.status(400).send({
      message: "Incorrect password",
    });
  }
  // generate a token with jwt
  const token = jwt.sign(
    { _id: userExistance[0]._id },
    process.env.TOKEN_SECRET
  );
  res.header("Authorization", "Bearer " + token);
  res.status(200).send({
    message: "User logged in successfully!",
    token: token,
  });
};

// Update isVerified field
exports.updateIsVerified = async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    await user.findOneAndUpdate(
      { _id: req.params.id },
      { isVerified: true },
      { new: true }
    );
    res.status(200).send({
      message: "User verified successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: "Error updating user with id " + req.params.id,
    });
  }
};
