module.exports = (sequelize, DataTypes) => {
    const hotdog = sequelize.define('hotdog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'hotdog',
        timestamps: false
    });


    return hotdog
};