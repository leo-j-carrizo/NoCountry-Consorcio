const Example = require('../models/example.model');

const exampleCtrl = {};

exampleCtrl.getExample = async (req, res) => {
  try {

    return res.status(200).json({ status: true, message: 'success get'});
  } catch (err) {
    console.error(error)
    return res.status(500).json({ message: 'internal error' });
  }
};

exampleCtrl.addExample = async (req, res) => {
  try {

    return res.status(200).json({ status: true, message: 'success post'});
  } catch (err) {
    console.error(error)
    return res.status(500).json({ message: 'internal error' });
  }
};

exampleCtrl.updateExample = async (req, res) => {
  try {

    return res.status(200).json({ status: true, message: 'success put'});
  } catch (err) {
    console.error(error)
    return res.status(500).json({ message: 'internal error' });
  }
};

exampleCtrl.deleteExample = async (req, res) => {
  try {

    return res.status(200).json({ status: true, message: 'success delete'});
  } catch (err) {
    console.error(error)
    return res.status(500).json({ message: 'internal error' });
  }
};

module.exports = exampleCtrl;