const hello = async (req, res) => {
  return res.send({ status: 1, result: 'Hello world!' });
};

const sayHi = async (req, res) => {
  return res.send({ status: 1, result: 'Say hi!' });
};

module.exports = { hello, sayHi };
