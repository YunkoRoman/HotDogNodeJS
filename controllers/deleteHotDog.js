const dataBase = require('../dataBase').getInstance();
// Видаляємо Хот Дог
module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const id = req.params.id;
        const deleteHotDog = await hotDogModel.destroy({
                where:{
                    id
                }
        });

        res.json({
            success: true,
            msg: `${deleteHotDog} hot dog delete`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};