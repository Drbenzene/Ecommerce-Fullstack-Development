import JWT from "jsonwebtoken";

const generateToken = async(id) => {
  const key = process.env.JWT_SECRET || "secret";
  return JWT.sign({"id": id}, key, {expiresIn: "1hr"});
}

export default generateToken;