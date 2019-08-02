const dataBase = require('../dataBase').getInstance();

// Змінюємо дані в базі
module.exports = async (req, res) => {
    try {
        const hotDogModel = dataBase.getModel('hot_dog');
        const {name, description} = req.body;
        const id = req.params.id;
        if (!name) throw new Error('No name');
        if (!description) throw new Error('No description');
        if (!id) throw new Error('No id HotDog');
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