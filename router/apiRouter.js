import express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Enter a API endpoint'
    }
    return res.json(data)
});

const marks = [10, 2, 4, 6, 8]

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    marks.push(req.body.mark);
    return res.json({
        mark: req.body.mark,
        state: 'success',
        message: 'mark added'
    });
});

apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'erorr',
            message: 'not valid index'
        });
    }
    if (marks.length === 0) {
        return res.json({
            state: 'erorr',
            message: 'marks are empty'
        });
    }
    if (position >= marks.length) {
        return res.json({
            state: 'erorr',
            message: `no number with this index. Last index is ${marks.length - 1}`
        });
    }
    if (!Number.isInteger(newMarkValue) || newMarkValue < 1 || newMarkValue > 10) {
        return res.json({
            state: 'erorr',
            message: `new mark is not a valid integer`
        });
    }


    marks.splice(position, 1, newMarkValue)
    return res.json({
        state: 'success',
        message: 'mark changed'
    });
})

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'erorr',
            message: 'not valid index'
        });
    }
    if (marks.length === 0) {
        return res.json({
            state: 'erorr',
            message: 'marks are empty'
        });
    }
    if (position >= marks.length) {
        return res.json({
            state: 'erorr',
            message: `no number with this index. Last index is ${marks.length - 1}`
        });
    }

    marks.splice(position, 1);

    return res.json({
        state: 'success',
        message: 'mark deleted'
    });
});