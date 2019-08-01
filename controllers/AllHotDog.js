const dataBase = require('../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const PhotoModel = dataBase.getModel('photo');
        const hotDogs = await PhotoModel.findAll({
            include:[{
                model:hotDogModel,
                attributes:["id" ,"name", "description"]
            }],
        });


        res.json({
            success: true,
            msg: hotDogs
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};