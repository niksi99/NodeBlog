require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./server/config/DBSetuUp')

app.use(express.urlencoded( {extended: true}));
app.use(express.json())

const express_layout = require('express-ejs-layouts');
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

app.use(express_layout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
    console.log(`App lsite on PORT ${PORT}`);
})