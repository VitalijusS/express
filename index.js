import express from 'express';
import { students } from './data/students.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('<h1>Hello World!!!</h1>');
})
app.get('/about', (req, res) => {
    return res.send('<h1>About me</h1>');
})
app.get('/services', (req, res) => {
    return res.send('<h1>Services</h1>');
})
app.get('/services/:seriveName', (req, res) => {
    const services = ['design', 'ux', 'coding', 'management'];
    if (services.includes(req.params.seriveName)) {
        return res.send(`<h1>Services: ${req.params.seriveName}</h1>`);
    }
    return res.send('<h1>Services: NO :)</h1>');
})
app.get('/services/ux', (req, res) => {
    return res.send('<h1>Services: UX</h1>');
})
app.get('/services/programing', (req, res) => {
    return res.send('<h1>Services: Programing</h1>');
})
app.get('/services/*', (req, res) => {
    return res.send('<h1>No such service</h1>');
})
app.get('/team', (req, res) => {
    return res.send('<h1>Team</h1>');
})
app.get('/team/:name', (req, res) => {
    const names = ['chuck', 'lolo']
    if (names.includes(req.params.name)) {
        return res.send(`<h1>Team member ''${req.params.name}''</h1>`);
    }
    return res.send(`<h1>Team member ''${req.params.name}'' is not found</h1>`);
})

app.get('/students', (req, res) => {
    let names = [];
    for (const [student, value] of Object.entries(students)) {
        names.push(value.name);
    }
    names = names.join(', ')
    const index = names.lastIndexOf(',')
    names = names.slice(0, index) + ' ir ' + names.slice(names.lastIndexOf(',') + 1);
    return res.send(`Mokosi ${Object.keys(students).length} studentai: ${names}`);
})
app.get('/students/:studentName', (req, res) => {
    if (Object.keys(students).includes(req.params.studentName.toLowerCase())) {
        const studentObj = students[req.params.studentName.toLowerCase()];
        return res.send(`Studentas, vardu ${studentObj.name} yra ${studentObj.age} metu amziaus ir yra ${studentObj.isMarried ? "" : "ne "} vedes.`)
    }
    return res.send(`Studento, vardu ${req.params.studentName} nera.`);
})

app.get('*', (req, res) => {
    return res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`App running on  http://localhost:${port}`);
})