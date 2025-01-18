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
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json({ limit: '10mb' }));

// database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados bem-sucedida!");
    }).catch((err) => {
        console.log("Erro ao conectar ao banco de dados:", err)
    });

app.use('/', categoriesController);
app.use('/', articlesController);





app.get('/', (req, res) => {
    Article.findAll({
        include: [{model: Category}],
        order:[
            ['id', 'DESC']
        ]
    }).then(articles => {
        res.render('index.ejs',{ articles: articles});
    });
    
});


app.get('/:slug', (req, res) => {
    let slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            res.render('article.ejs', {article: article});
        }else{
            res.redirect('/');
        }
    }).catch(err => {
        res.redirect('/');
    });
});


app.listen(8080, () => {
    console.log("O Servidor esta rodando!")
});