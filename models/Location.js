const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for books
class Location extends Model {}

Location.init(
  // TODO: set up User model
  
  // email with validation + contraint
  {id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
    location_name: {
      type: DataTypes.STRING
    },
  },
  {
    // Link to database connection
    sequelize,
  }
);

module.exports = Location;
