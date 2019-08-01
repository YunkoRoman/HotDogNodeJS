const dataBase = require('../dataBase').getInstance();
const path = require('path');
module.exports = async (req, res) => {
    try {
        const way = path.normalize(req.files.photo[0].path);
        const Way = way.slice(7);
        const id = req.params.id;
        const PhotoModel = dataBase.getModel('photo');
        const AddPhoto = await PhotoModel.create({
            path:Way,
            hotDog_id:id
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