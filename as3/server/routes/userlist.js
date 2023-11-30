var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let user = require('../models/userlist');
let userController = require('../controllers/userlist')

let mongoose = require('mongoose');
// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* Get route for the Info user list */
// Read Operation
router.get('/', userController.Dislayuserlist);
/* Get route for Add Book page --> Create */
router.get('/add', userController.Adduser);
/* Post route for Add Book page --> Create */
router.post('/add', userController.Processuser);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', userController.Edituser);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', userController.ProcessEdituser);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', userController.Deleteuser);
module.exports = router;