const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const { LOCAL_CLIENT, LOCAL_CLIENT_SECOND, CLIENT_FIREBASE, CLIENT_VERCEL } = require("../config/defaults");

const applyMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        LOCAL_CLIENT,
        CLIENT_FIREBASE,
        CLIENT_VERCEL,
        LOCAL_CLIENT_SECOND
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = applyMiddleware