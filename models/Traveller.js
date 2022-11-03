const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveller extends Model {}

Traveller.init(
    { id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
        name: {
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isEmail: true
            }
             },
    },
    {
        sequelize,
    }
);

module.exports=Traveller