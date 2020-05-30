const express = require('express')
const employes = require('./routes/employes')
const app = express()

// Settings
app.set('port', process.env.PORT || 8000)

//Middleware
app.use(express.json())

// Routes
app.use(employes)

// Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
