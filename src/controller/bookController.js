import * as bookService from "../services/bookService"

export const getBooks = async (req, res) => {
  try {
    const response = await bookService.getBooks();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      message: "Fail at books controller" + error,
    });
  }
};