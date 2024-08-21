import express from 'express';

export const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
    return res.send('GET: Books')
})
bookRouter.post('/', (req, res) => {
    return res.send('POST: Books')
})
bookRouter.put('/', (req, res) => {
    return res.send('PUT: Books')
})
bookRouter.delete('/', (req, res) => {
    return res.send('DELETE: Books')
})