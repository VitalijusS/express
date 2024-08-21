import express from 'express';
import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { bookRouter } from './router/booksRouter.js';
import { phoneRouter } from './router/phonesRouter.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('<h1>Hello World!!!</h1>');
})
app.get('/about', (req, res) => {
    return res.send('<h1>About me</h1>');
})

app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/students', studentsRouter);
app.use('/books', bookRouter);
app.use('/phones', phoneRouter);

app.get('*', (req, res) => {
    return res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`App running on  http://localhost:${port}`);
})