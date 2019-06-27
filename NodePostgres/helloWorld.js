var pg = require('pg')



/*using options*/ //{
const client = new pg.Client({
  user: 'postgres',
  host: '24.189.66.225',
  database: 'postgres',
  password: process.argv[2],
  port: 5432,
})
// /**/

console.log(process.argv)
const Client = pg.Client;
/*using connection string*/ //{
// const client = new Client({connectionString: `postgres://postgres:`+process.argv[2]+`@127.0.0.1/postgres`});
// /**/
client.connect().catch((err)=>{
    console.log(err)
})

client.query('SELECT * from pg_settings;', (err, res) => {
  console.log(err, res.rows)
  client.end()
})