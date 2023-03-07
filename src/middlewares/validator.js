function validator({ schema }) {
  return async (req, res, next) => {
    try {
      const data = req.body;
      await schema.validate(data, { abortEarly: false });
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = { validator };
