const dataBase = require('../dataBase').getInstance();
const path = require('path');
module.exports = async (req, res) => {
    try {
        // const way = path.normalize(req.files.photo[0].path);
        // const Way = way.slice(7);
        const hotDogModel = dataBase.getModel('hot_dog');
        const {name, description} = req.body;
        console.log(name);
        const createHotDog = await hotDogModel.create({
            name,
            description,

        });

        res.json({
            success: true,
            msg: createHotDog
        })

    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};