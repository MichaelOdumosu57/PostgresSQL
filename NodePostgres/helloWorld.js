var pg = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   host: 'http://24.189.66.225/database',
//   database: 'postgres',
//   password: null,
//   port: 80,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new pg.Client({
//   user: 'postgres',
//   host: 'http://24.189.66.225',
//   database: 'postgres',
//   password: null,
//   port: 5432,
// })
const Client = pg.Client;
const client = new Client({connectionString: `postgres://postgres:`+null+`@127.0.0.1/postgres`});
client.connect().catch((err)=>{
    console.log(err)
})

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})