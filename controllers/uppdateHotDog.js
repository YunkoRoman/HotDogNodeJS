const dataBase = require('../dataBase').getInstance();


module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const {name, description} = req.body;
        const id = req.params.id;
        const updatedHotDog = await hotDogModel.update({
            name,
            description

        }, {
            where:{
                id
             }
            }
        );

        res.json({
            success: true,
            msg: `${updatedHotDog} hot dog update`
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};