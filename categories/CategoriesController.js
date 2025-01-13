import express from 'express';
const router = express.Router();

import Category from './Category.js';
import slugify from 'slugify';

// Rota para exibir o formulário de criação de uma nova categoria
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new.ejs')
});

// Rota para salvar uma nova categoria no banco de dados
router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/admin/categories');
        })
    }else{
        res.redirect('/admin/categories/new');
    }
});

// Rota para listar todas as categorias
router.get('/admin/categories', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/categories/index.ejs', { categories: categories });
    }).catch(error => {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).send('Erro ao buscar categorias');
    });
});



router.post('/admin/categories/deletar', (req, res) => {
    const id = req.body.id;
    if (id && !isNaN(id)) {  // Verifica se o ID é válido
        Category.destroy({ 
            where: { id: id } }).then(() => {
            res.redirect('/admin/categories');
        }).catch((error) => {
            console.error("Erro ao excluir categoria:", error);
            res.redirect('/admin/categories');
        });
    } else {
        res.redirect('/admin/categories');
    }
});

// Rota para exibir o formulário de edição de uma categoria específica
router.get('/admin/categories/edit/:id', (req, res) => {
    const id = req.params.id;
    if (id && !isNaN(id)) {
        Category.findByPk(id)
            .then(category => {
                if (category != undefined) {
                    res.render('admin/categories/edit.ejs', { category: category });
                } else {
                    res.redirect('/admin/categories');
                }
            })
            .catch(err => {
                res.redirect('/admin/categories');
            });
    } else {
        res.redirect('/admin/categories');
    }
});

// Rota para atualizar uma categoria existente
router.post('/categories/update', (req, res) => {
    let id = req.body.id;
    let title = req.body.title;

    Category.update({title: title, slug: slugify(title)},
        {where: {id: id}}
    ).then(() => {
        res.redirect('/admin/categories');
    })

})



export default router;