import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

studentsRouter.get('/', (req, res) => {
    const names = Object.values(students).map(a => a.name);
    if (names.length === 0) {
        return res.send(`Mokosi ${names.length} studentu`);
    }
    let str = names.join(', ');
    if (names.length === 1) {
        return res.send(`Mokosi ${names.length} studentas: ${str}`);
    }
    if (names.length > 1) {
        str = str.slice(0, str.lastIndexOf(',')) + ' ir ' + str.slice(str.lastIndexOf(',') + 1);
        return res.send(`Mokosi ${names.length} studentai: ${str}`);
    }
})
studentsRouter.get('/:studentName', (req, res) => {
    const name = req.params.studentName.toLowerCase();
    let student = null;

    for (const key in students) {
        if (key.toLowerCase() === name) {
            student = students[key];
        }
    }

    if (student) {
        return res.send(`Studentas, vardu ${student.name} yra ${student.age}
            metu amziaus ir yra ${student.isMarried ? "" : "ne "}vedes.`);
    } else {
        return res.send(`Studento, vardu ${req.params.studentName} nera.`);
    }
})