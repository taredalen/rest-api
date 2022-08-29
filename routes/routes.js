const router = require('express').Router()
const Model = require('../models/model');

router.post('/post', async (req, res) => {
    try {
        const data = await new Model({
            selector: req.body.selector,
            value: req.body.value
        }).save();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        res.json(await Model.find())
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const result = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const data = await Model.findByIdAndDelete(req.params.id)
        res.send(`${data.id} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.delete('/deleteAll', async (req, res) => {
    try {
        await Model.remove({});
        res.send(`Everything has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;