import express from "express";
import bodyParser from "body-parser" ;

const app = express();

app.use(express.static('public'));
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}));

// Set EJS as template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
