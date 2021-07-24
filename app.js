const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    let today = new Date();
    let currentDay = today.getDay();
    let day = '';

    if (currentDay === 6 || currentDay === 0) {
        day = 'weekend';
        // res.render('list', { kindOfDay: day });
    } else {
        day = 'weekday';
        // res.render('list', { kindOfDay: day });
    }
    res.render('list', { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running');
});
