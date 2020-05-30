const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'edward123',
  database: 'company'
})

mysqlConnection.connect((err) => {
  if(err)
    console.log(err)
  
  console.log('DB is connected')
})

module.exports = mysqlConnection