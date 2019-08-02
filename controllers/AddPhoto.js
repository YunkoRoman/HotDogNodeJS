const dataBase = require('../dataBase').getInstance();
const path = require('path');
module.exports = async (req, res) => {
    try {
        const way = path.normalize(req.files.photo[0].path);
        const Way = way.slice(7);
        const id = req.params.id;
        const hotDogModel = dataBase.getModel('hot_dog');
        const AddPhoto = await hotDogModel.update({
            path:Way,
        }, {
            where:{
                id
            }
        });

        res.json({
            success: true,
            msg: AddPhoto
        })

    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};