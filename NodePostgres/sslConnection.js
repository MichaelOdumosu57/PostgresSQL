const express = require('express')
const app = express()
const port = 3001
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
global.ultraObject = require('./ultraObject.js')
var pg =  require( 'pg')
var pgcs = require('pg-connection-string')
pg.defaults.ssl = true
app.use(cors())
app.use(compression())





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))

// console.log(process.env)

const config = {
    database : "postgres",
    host     : "24.189.66.225",
    user     : "postgres",
    port     : 5432,
    // this object will be passed to the TLSSocket constructor
    ssl : {
    rejectUnauthorized : false,
    // ca   : fs.readFileSync("/home/uoul/.postgresql/root.crt").toString(),
    // ca: 'a',
    key  : fs.readFileSync("/home/uoul/.postgresql/postgresql.key").toString(),
    cert : fs.readFileSync("/home/uoul/.postgresql/postgresql.crt").toString(),
        // isServer: true,
        // requestCert:false,
        // sslmode:'verify-ca',
    },
  
//   connectionString:`postgres://postgres:`+process.argv[2]+`@127.0.0.1/postgres?sslmode=verify-full
//   &sslrootcert=/home/uoul/.postgresql/root.crt
//   &sslkey=/home/uoul/.postgresql/postgresql.key
//   &sslcert=/home/uoul/.postgresql/postgresql.crt
//   `
 

}


console.log(pgcs)
// console.log(pg)





function dbInteraction(   dev_obj   ){
    const client = new pg.Client(config)
    client.connectionParameters.host = client.host =  "24.189.66.225"
    // console.log(client)
    client.on('error',function(err){
        console.log(err)
    })
    client.connect((err) => {
      if (err) {
        console.error('error connecting', err.stack)
      } else {
        console.log('connected')
        
      }
    })
    
    client.query('SELECT * from pg_settings;', (err, res) => {
      console.log(err, res.rows)
      client.end()
    })
}

// const pool = new Pool(config)
// pool.connect()
//   .then(client => {
//     console.log('connected')
//     client.release()
//   })
//   .catch(err => console.error('error connecting', err.stack))
//   .then(() => pool.end())