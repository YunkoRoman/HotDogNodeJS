const dataBase = require('../dataBase').getInstance();
const path = require('path');
// Створення нового Хот Дога
module.exports = async (req, res) => {
    try {

        const hotDogModel = dataBase.getModel('hot_dog');
        const {name, description} = req.body;
        if (!name) throw new Error('No name');
        if (!description) throw new Error('No description');
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