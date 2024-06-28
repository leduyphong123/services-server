import * as authService from "../services/authService";

export const register = async (req, res) => {
    const { name, phone, password, email } = req.body;
  try {
    if (!name || !phone || !password || !email)
      return res.status(400).json({ err: 1, message: "Missing inputs!" });
    const response = await authService.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      message: "Fail at auth controller" + error,
    });
  }
};

export const login = async (req, res) => {
  const {password, email } = req.body;
  try {
    if (!password || !email)
      return res.status(400).json({ err: 1, message: "Missing inputs!" });
    const response = await authService.loginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      message: "Fail at auth controller" + error,
    });
  }
};