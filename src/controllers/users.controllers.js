const userCtrl = {};

const passport = require('passport')
const User = require('../models/user')

userCtrl.renderSignUpform =(req, res) => {
    res.render('users/signup')
};

userCtrl.signup =async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if(password != confirm_password) {
        errors.push({text: 'passwords do not match'})
    }
    if (password.length < 4) {
        errors.push({text: 'Password must be ar last 4 characters'})
    }
    if(errors.length > 0 ){
        res.render('users/signup', {
            errors,
            name,
            email
        })
    } else {
        const emailUser = await User.findOne({email: email})
        if (emailUser){
            req.flash('error_msg', ' Ya esta en uso el Email');
            res.redirect('/users/signup')
        } else {
            const newUser = new User({name, email, password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'you are register');
            res.redirect('signin')
        }
    }

};


userCtrl.renderSigninform =(req, res) => {
    res.render('users/signin')
};

userCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin', 
    successRedirect: '/',
    failureFlash: true
});

userCtrl.logout =(req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/users/signin');
    });
   
};


module.exports = userCtrl; 