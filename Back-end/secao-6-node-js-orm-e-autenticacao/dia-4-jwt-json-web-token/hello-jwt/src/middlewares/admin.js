module.exports = (req, res, next) => {
    const { user } = req;
    console.log(user.data);
  try {
    if (user.data.admin !== true) return res.status(403).json({ erro: 'Restricted access' });
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};