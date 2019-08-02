const dataBase = require('../dataBase').getInstance();
// Дістаєм всі хот доги з бази
module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const hotDogs = await hotDogModel.findAll({
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