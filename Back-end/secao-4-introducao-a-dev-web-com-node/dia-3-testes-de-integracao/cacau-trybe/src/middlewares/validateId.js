const validateId = (req, res, next) => {
    const { id } = req.params;
    const nan = Number(id);
    if (Number.isNaN(nan)) {
      res.status(400).json({ message: 'É preciso informar um ID válido' });
    } else {
      next();
    }
  };

module.exports = validateId;