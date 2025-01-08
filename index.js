import express from 'express';
const app = express();
import Swal from 'sweetalert2';


import bodyParser from 'body-parser';
import connection from './database/database.js'

import categoriesController from './categories/CategoriesController.js';
import articlesController from './articles/ArticlesController.js';

import Article from './articles/Article.js'
import Category from './categories/Category.js';

// view engien
app.set('view engine', 'ejs');
//static
app.use(express.static('public'));
// body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((err) => {
        console.log("ERRO:", err)
    });

app.use('/', categoriesController);
app.use('/', articlesController);





app.get('/', (req, res) => {
    res.render('index.ejs')
});


app.listen(8080, () => {
    console.log("O Servidor esta rodando!")
});