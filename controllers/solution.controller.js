const Model = require('../models/solution.model');

exports.postElement = async(req, res, next) => {
    console.log('post');
    console.log('post req', req.body);
    console.log('post req', req.user);
    try {
        const body = req.body;
        const data= await new Model({ ...body, author: req.user._id }).save();
        res.status(200).json(data);
        /*
        console.log('req.user._id', req.user._id);
        const data = await new Model({
            mapping: req.body.mapping,
            author: req.user._id })
            .save();
        res.status(200).json(data);

         */
    }
    catch (e) {
        res.status(400);
    }
}


exports.getElements = async (req, res, next) => {
    try {
        const result = await Model.find();
        console.log('result', result);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}

exports.deleteElements = async (req, res, next) => {
    try {
        await Model.deleteMany({});
        res.send(`Everything has been deleted.`)
        res.status(200);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}