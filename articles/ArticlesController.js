import express from 'express';
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('ROTA DE ARTICLES')
});

router.get('/admin/articles/new', (req, res) => {
    res.send('ROTA PARA CRIAR UMA NOVO ARTICLES')
});

export default router;