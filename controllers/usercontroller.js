'use strict';

const Sequelize = require('sequelize');
const User = require('/models/user.js');

module.exports = {
    createUser: (name, email, password) => {
        return models.User.create({
            name, email, password
        });
    },
addUser: (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    if(name == '') {
        errorArr.push('You entered an invalid Username. \n');
    }
    if(!validEmail.test(email)) {
        errorArr.push('You entered an invalid Email Address.');
    }
    if(!validPass.test(password)) {
        errorArr.push('Your password did not meet the minimum requirements.');
    }
       // Encrypt password
       passwordMod.encryptPassword({password}).exec({
        error: (err) => {
            errorArr.push("There was a password encryption error!");
        },
        success: function(encryptedPassword) {
            // First, check for errors to ensure that invalid data is not inserted into db
            if(errorArr.length > 0) {
                return renderUsers(req, res, errorArr);
            }
            services.createUser(name, email, encryptedPassword).then(data => {
                return res.send('success');
            });
        }
    });
    }
  
}
