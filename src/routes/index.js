const routes = require("express").Router();
const numberOfMemebers = require('../discord');

routes.get('/', async (req, res)=>{
    numberOfMemebers()
        .then(data => res.json({numberOfMembers : data}))

});

module.exports = routes;