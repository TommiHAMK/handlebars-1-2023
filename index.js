const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    //res.send("Testing");
    res.render('index',
    {
       pagetitle : "Welcome to our website!" 
    });
})

app.get('/about-us', (req, res) => {
    res.render('about-us',
    {
        pagetitle: "Our Story"
    });
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
