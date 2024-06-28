import db from "../models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ name, phone, password, email }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email, password: hashPassword(password), name, phone },
        default: {
          email,
          phone,
          name,
          password: hashPassword(password),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { email: response[0].email, password: response[0].password },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token ? "register success" : "Email has been used",
        token: token || null,
      });
    } catch (err) {
      reject(err);
    }
  });

  export const loginService = ({password, email }) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await db.User.findOne({
          where: { email},
          raw :true // để dữ liệu thành object
        });
       const isCorrectPassword = response && bcrypt.compareSync(password,response.password)
        const token =
          isCorrectPassword &&
          jwt.sign(
            { email: response.email, password: response.password },
            process.env.SECRET_KEY,
            { expiresIn: "2d" }
          );
        resolve({
          err: token ? 0 : 2,
          message: token ? "Loggin success" : response ? "Password is wrong": "Email not foud",
          token: token || null,
        });
      } catch (err) {
        reject(err);
      }
    });