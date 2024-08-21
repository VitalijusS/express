import express from 'express';

export const servicesRouter = express.Router();

servicesRouter.get('/', (req, res) => {
    return res.send('Sertvices page');
})

servicesRouter.get('/:serivceName', (req, res) => {
    const services = ['design', 'ux', 'coding', 'management'];
    if (services.includes(req.params.serivceName)) {
        return res.send(`<h1>Services: ${req.params.serivceName}</h1>`);
    }
    return res.send('<h1>Services: NO :)</h1>');
})
servicesRouter.get('/ux', (req, res) => {
    return res.send('<h1>Services: UX</h1>');
})
servicesRouter.get('/programing', (req, res) => {
    return res.send('<h1>Services: Programing</h1>');
})
servicesRouter.get('/*', (req, res) => {
    return res.send('<h1>No such service</h1>');
})