const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const routes = require('./src/route')

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hello Kennect!');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});