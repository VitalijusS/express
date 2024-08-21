import express from 'express';

export const phoneRouter = express.Router();

phoneRouter.route('/')
    .get((req, res) => {
        return res.send('GET: phones')
    })
    .put((req, res) => {
        return res.send('put: phones')
    })
    .post((req, res) => {
        return res.send('post: phones')
    })
    .delete((req, res) => {
        return res.send('delete: phones')
    })