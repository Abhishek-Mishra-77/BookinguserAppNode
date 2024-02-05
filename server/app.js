const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const sequelize = require('./util/database')
const postData = require('./Routes/postData');
const getData = require('./Routes/getData')
const removeData = require('./Routes/removeData');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());


app.use('/', postData);
app.use('/user', getData)
app.use('/user', removeData);



sequelize.sync()
    .then(() => {
        console.log('Info table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Info table:', error);
    });


app.listen(3000, () => {
    console.log('App started')
});