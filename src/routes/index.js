const authRoutes = require("./auth.routes");
const userRoutes = require('./users.routes');
const clientRoutes = require('./clients.routes');
const yardRoutes = require('./yards.routes');
const ingresosRoutes = require('./register.routes');
// const orderRoutes = require('./order.routes')

const routerApi = (app) => {

    app.use("/users", authRoutes);
    app.use("/users", userRoutes);
    app.use("/clients", clientRoutes);
    app.use("/yards", yardRoutes);
    app.use("/ingresos", ingresosRoutes);
    // app.use("/api/v1", producRoutes);
    // app.use("/api/v1", cartRoutes);
    // app.use("/api/v1", orderRoutes);

  };
  
  module.exports = routerApi;