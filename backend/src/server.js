const app = require ('./app');
const database = require ('./database');

database.sync();
console.log('Database running at 3306');

app.listen(3001);
console.log('Server running at 3001');