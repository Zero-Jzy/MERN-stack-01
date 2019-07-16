const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://phu:phu123@ds349587.mlab.com:49587/mern-stack', {useNewUrlParser: true});
mongoose.connection.on('error', function (err) {
    console.log('Lỗi kết nối đến CSDL: ' + err);
});

// Bodyparser Middleware
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/products', require('./api/products'));
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
