require('dotenv').config();
const app = require('./server/server.conf');
require('./server/db.conf');

async function main() {
  await app.listen(process.env.PORT || 4003);
  console.log('📡 Server on port ', app.get('port'));
}

main();
