const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8082;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(bodyParser.json());


app.get("/", (req, res) => {
  const response = [
    {
      id : 1,
      name : "Payment 1"
    },
    {
      id : 2,
      name : "Payment 2"
    }
  ];
  res.status(200).json({status : 200, response :response});
})


app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});