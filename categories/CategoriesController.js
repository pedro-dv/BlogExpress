import express from 'express';
const router = express.Router();

import Category from './Category.js';
import slugify from 'slugify';

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });


// Rota para exibir o formulário de criação de uma nova categoria
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new.ejs')
});

// Rota para salvar uma nova categoria no banco de dados
router.post('/categories/save', upload.single('image'), (req, res) => {
    const title = req.body.title;
    const image = req.file ? req.file.filename : null;  // Verifique se a imagem foi enviada

    if (title !== undefined) {
        Category.create({
            title: title,
            slug: slugify(title),
            image: image
        }).then(() => {
            res.redirect('/admin/categories');
        }).catch(err => {
            console.error("Erro ao salvar categoria:", err);
            res.redirect('/admin/categories/new');
        });
    } else {
        console.log("Erro: título não fornecido");
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

router.post('/categories/update', upload.single('image'), (req, res) => {
    const { id, title } = req.body;
    const image = req.file ? req.file.filename : null;

    let updateData = { title, slug: slugify(title) };
    if (image) {
        updateData.image = image;
    }

    Category.update(updateData, { where: { id } })
        .then(() => {
            res.redirect('/admin/categories');
        })
        .catch(err => {
            console.error("Erro ao atualizar categoria:", err);
            res.redirect('/admin/categories');
        });
});

// router.post('/categories/update', upload.single('image'), (req, res) => {
//     let id = req.body.id;
//     let title = req.body.title;
//     const image = req.file ? req.file.filename : null;

//     let updateData = { title, slug: slugify(title) };
//     if (image) {
//         updateData.image = image;
//     }

//     Category.update({title: title,
//             slug:
//                 slugify(title)
//             },
//         {   where:
//                 {id: id}
//             }
//     ).then(() => {
//         res.redirect('/admin/categories');
//     })

// })



export default router;