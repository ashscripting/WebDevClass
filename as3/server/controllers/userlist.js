var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let user = require('../models/userlist');

module.exports.Dislayuserlist = async (req,res,next)=>{ //< Mark function as async
    try{
        const userList = await user.find(); //< Use of await keyword
        res.render('user/list', {
            title: 'user List',
            userList: userList,
            displayName: req.user ? req.user.displayName:''
        });
    }catch(err){
        console.error(err);
        //Handle error
        res.render('user/list', {
            error: 'Error on server'
        });
    }
};

module.exports.Adduser = async (req,res,next)=>{
    try{
        res.render('user/add',
            {
                title:'Add user',
                displayName: req.user ? req.user.displayName:''
            })
    }
    catch(err)
    {
        console.error(err);
        res.render('user/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.Processuser = async (req,res,next)=>{
    try{
        let newuser = user({
            "Name":req.body.Name,
            "Lastname": req.body.Lastname,
            "UserId": req.body.UserId,
        });
        user.create(newuser).then(() =>{
            res.redirect('/userlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('user/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.Edituser = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const userToEdit = await user.findById(id);
        res.render('user/edit',
            {
                title:'Edit user',
                user:userToEdit
            })
    }
    catch(error){
        console.error(err);
        res.render('user/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.ProcessEdituser= (req,res,next)=>{
    try{
        const id = req.params.id;
        let updateduser = user({
            "_id":id,
            "Name":req.body.Name,
            "Lastname": req.body.Lastname,
            "UserId": req.body.UserId,

        });
        user.findByIdAndUpdate(id,updateduser).then(()=>{
            res.redirect('/userlist')
        });
    }
    catch(error){
        console.error(err);
        res.render('user/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.Deleteuser= (req,res,next)=>{
    try{
        let id = req.params.id;
        user.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/userlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('user/list',
            {
                error: 'Error on the server'
            });
    }
}