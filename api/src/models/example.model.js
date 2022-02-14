const { Schema, model } = require('mongoose');

const exampleSchema = new Schema({
  data: {
    type: String,
    default: 'test'
  }
})

const Example = model('example', exampleSchema);
module.exports = Example 