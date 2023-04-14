const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Dummy "database"
let products = [   
    { id: 1, name: 'Chair', price: 100 },   
    { id: 2, name: 'Table', price: 200 }   
];


app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

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



app.get('/products', (req, res) => {
    res.render('products',
    {
        pagetitle: "Our Products",
        desc: "Take a look at our cool products!",
        products : products
    });
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
