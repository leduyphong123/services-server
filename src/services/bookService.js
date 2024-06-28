import db from "../models/index";

  export const getBooks = () =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await db.User.findAll({
          raw: true, // để dữ liệu thành object
        });
        resolve({
          err: response ? 0 : 2,
          message: response ? "Get book success" : "Book no list",
          books: response || null,
        });
      } catch (err) {
        reject(err);
      }
    });