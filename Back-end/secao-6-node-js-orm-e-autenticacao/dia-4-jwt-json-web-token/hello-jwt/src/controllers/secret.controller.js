const getSecret = (_req, res) => {
    res.status(200).json({ message: 'Peter Parker é o homem aranha' });
  };
  
  module.exports = {
    getSecret,
  };