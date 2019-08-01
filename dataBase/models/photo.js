module.exports = (sequelize, DataTypes) => {
    const photo = sequelize.define('photo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: DataTypes.STRING
        },
        hotDog_id: {
            type: DataTypes.INTEGER,
            foreignKey: true}

    }, {
        tableName: 'photo',
        timestamps: false
    });
    const hotDog = sequelize.import('./hot_dog.js');
    photo.belongsTo(hotDog, {foreignKey: 'hotDog_id'});

    return photo
};