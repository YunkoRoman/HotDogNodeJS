const dataBase = require('../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const id = req.params.id;
        const hotDogs = await hotDogModel.findOne({
            where:{
                id
            }

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