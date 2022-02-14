const mongoose = require('mongoose');

// Configuracion para MongoDB COMPASS. En caso de usar MongoAtlas colocar URI con credenciales necesarias
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/example';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const { connection } = mongoose;

connection.once('open', () =>
  console.log('📂 DB is Connected')
);