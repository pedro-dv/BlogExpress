import express from 'express';
const router = express.Router();

import Category from './Category.js';
import slugify from 'slugify';


router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new.ejs');
});

router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/');
        })
    }else{
        res.redirect('/admin/categories/new');
    }
});

router.get('/admin/categories', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/categories/index', {categories: categories});
    })
})


export default router;