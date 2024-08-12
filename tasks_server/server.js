const express = require('express');
const config = require('config');
//const atob = require('atob');
const PORT = config.get("port");
const cors =require('cors');
const usersRouteHandlerApp = require('./routes/users');
const searchRouteHandlerApp = require('./routes/search');
// const reviewsRouteHandlerApp = require('./routes/reviews');
// const sharesRouteHandlerApp = require('./routes/shares');

const app =  express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRouteHandlerApp);
app.use("/search", searchRouteHandlerApp);
// app.use("/reviews", reviewsRouteHandlerApp);
// app.use("/shares", sharesRouteHandlerApp);

app.listen(PORT, ()=>{console.log(`server started listening at port ${PORT}`);});