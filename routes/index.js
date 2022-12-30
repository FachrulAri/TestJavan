const routers = require('express').Router();
const connection = require('../db');

routers.get('/family', (req, res) => {
    connection.query('SELECT * FROM family', (error, results) => {
      if (error) throw error;
  
      res.send(results);
    });
 });

routers.post('/family', (req, res) => {
    const { name, parent, gender } = req.body;
    const query = `INSERT INTO family (name, parent, gender) VALUES (?, ?, ?)`;
    connection.query(query, [name, parent, gender], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error saving new user to the database.');
      } else {
        res.send('User saved successfully.');
      }
    });
 });

routers.put('/family/:id', (req, res) => {
    // Extract the data from the request body
    var id = req.params.id;
    const { name, parent, gender } = req.body;

    // Use the data to update the record in the database
    var query = "UPDATE family SET name = ?, parent = ?, gender = ? WHERE id = ?";
    var values = [name, parent, gender, id];
    connection.query(query, values, function(error, results) {
      if (error) throw error;
      res.send("User updated successfully!");
    });
 });

routers.delete('/family/:id', (req, res) => {
    // Extract the ID from the request parameters
    var id = req.params.id;
  
    // Use the ID to delete the record from the database
    var query = "DELETE FROM family WHERE id = ?";
    var values = [id];
    connection.query(query, values, function(error, results) {
      if (error) throw error;
      res.send("User deleted successfully!");
    });
 });

module.exports = routers;
