import User from "../models/userModel.js";
import GenToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const userExists = await User.find({ email: email });

    if (userExists.length > 0) {
      throw new Error("User Already Exist.");
    }

    const userInfo = await User.create({
      username,
      email,
      password,
      firstName,
      lastName,
    });

    res.status(200).json({
      statusbar: "success",
      data: userInfo,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      throw new Error(
        "No User Found. Please Check your login Info and Try Again."
      );
    }

    if (checkUser && (await checkUser.passwordMatch(password))) {
        // console.log(checkUser)
      res.status(200).json({
        status: "success",
        data: {
          token: await GenToken(checkUser._id),
        },
      });
    }

    else {
        res.status(402).json({
            status: "failed",
            error: "Invalid Password. Please Try Again."
        })
    }

  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { cart, email } = req.body;

  try {
    const user = await User.findOneAndUpdate({ email: email }, { cart: cart });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
};

export { registerUser, loginUser, updateUser };
