// Este módulo tiene la responsabilidad de iniciar la aplicación
//--------------------------------------
const server = require("./src/server");
const { conn } = require('./src/db.js');
require('dotenv').config();
const {PORT} = process.env;
//--------------------------------------
// Sincronizando todos las modelos a la vez
conn.sync({ alter: true }).then(() => 
{
server.listen(PORT, () => 
{
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
