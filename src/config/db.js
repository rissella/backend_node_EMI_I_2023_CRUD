const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
/*const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
*/
// Option 2: Passing parameters separately (sqlite)
/*const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
*/
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('BasePrueba', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

async function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
