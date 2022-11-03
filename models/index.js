const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Trips.hasOne(Traveller, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});


Traveller.hasMany(Trips, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});


Location.hasMany(Trips, {
  foreignKey: 'location_id',
});

Trips.hasOne(Location, {
  foreignKey: 'location_id',
});

module.exports = { Location, Trips, Traveller };
