import express from 'express';
const router = express.Router();

import Category from '../categories/Category.js';
import Article from '../articles/Article.js';
import slugify from 'slugify';


router.get('/admin/articles', (req, res) => {
        Article.findAll({
            include: [{model: Category}]
        }).then(articles => {
            res.render('admin/articles/index.ejs', {articles: articles});
        });
        
   
});


router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new.ejs', { categories: categories});
    })
    
});

router.post('/articles/save', (req, res) => {
    let title = req.body.title;
    let body = req.body.content;
    let category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles');
    }).catch(err => {
        console.error('Erro ao salvar o artigo:', err);
        res.status(500).send('Erro ao salvar o artigo.');
    });
});



router.post('/articles/deletar', (req, res) => {
    const id = req.body.id;
    if (id && !isNaN(id)) {  // Verifica se o ID é válido
        Article.destroy({ 
            where: { 
                id: id 
            } 
        }).then(() => {
            res.redirect('/admin/articles');
        }).catch((error) => {
            console.error("Erro ao excluir artigo:", error);
            res.redirect('/admin/articles');
        });
    } else {
        res.redirect('/admin/categories'); 
    }
});




export default router;