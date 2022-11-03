const express = require('express');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: add userRoutes from controllers folder
// const userRoutes = require("./controllers/userController");
// app.use('/api/users', userRoutes);

// const superpowerRoutes = require("./controllers/superpowerController");
// app.use('/api/superpowers', superpowerRoutes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
