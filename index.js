const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    //res.send("Testing");
    res.render('index');
})

app.get('/about-us', (req, res) => {
    res.render('about-us');
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
