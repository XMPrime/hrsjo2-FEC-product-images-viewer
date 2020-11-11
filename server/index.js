const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});