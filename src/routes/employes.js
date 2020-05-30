const { Router } = require('express')
const router = Router()
const mysqlConnection = require('../database')

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM employees', (error, rows, fields) => {
    if(!error){
      return res.json(rows)
    } 
    throw new Error(error)
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  mysqlConnection.query('SELECT * FROM employees WHERE id= ?', [id], (error, rows) => {
    if(!error)
      return res.json(rows[0])
    throw new Error(error)
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body
  const query = 'CALL addOrUpdateEmployee(?, ?, ?)'

  mysqlConnection.query(query, [id, name, salary], (error, rows, fields) => {
    if (!error)
      return res.json(rows)
    throw new Error(error)
  })
})

router.post('/', (req, res) => {
  const { id, name, salary } = req.body
  const query = 'CALL addOrUpdateEmployee(?, ?, ?)'
  
  mysqlConnection.query(query, [id, name, salary], (error, rows, fields) => {
    if(!error)
      return res.json(rows)
    throw new Error(error)
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (error, rows, fields) => {
    if(!error)
      return res.json({ message: 'Empleado eliminado'})
    throw new Error(error)
  })
})

module.exports = router