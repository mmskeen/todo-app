var express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log("App is running on port " + port);
});
