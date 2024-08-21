import express from 'express';


export const teamRouter = express.Router();


teamRouter.get('/', (req, res) => {
    return res.send('<h1>Team</h1>');
})
teamRouter.get('/:name', (req, res) => {
    const names = ['chuck', 'lolo']
    if (names.includes(req.params.name)) {
        return res.send(`<h1>Team member ''${req.params.name}''</h1>`);
    }
    return res.send(`<h1>Team member ''${req.params.name}'' is not found</h1>`);
})