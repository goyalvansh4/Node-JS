const express = require('express');
const app = express();


app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Hello World');  
})

app.put('/users/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`);  
});

app.delete('/users/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});