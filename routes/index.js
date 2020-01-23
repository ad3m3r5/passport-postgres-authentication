const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('index', {
            title: 'Home',
            user: req.user,
            message: res.locals.message
        })
    } else {
        res.render('indexPrompt', {
            title: 'Home',
            user: req.user,
            message: res.locals.message
        })
    }
})

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'Your are already logged in.')
        res.redirect('/profile')
    } else {
        res.render('login', {
            title: 'Login',
            user: req.user,
            message: res.locals.message
        })
    }
})
router.post('/login', (req, res, next) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'You are already logged in.')
        res.redirect('/profile')
    } else {
        let user = (req.body.username).toLowerCase()
        let pass = req.body.password
        if (user.length === 0 || pass.length === 0) {
            req.flash('message', 'You must provide a username and password.')
            res.redirect('/login')
        } else {
            next()
        }
    }
}, passport.authenticate('login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
}))

router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/profile')
    } else {
        res.render('register', {
            title: 'Register',
            user: req.user,
            message: res.locals.message
        })
    }
})
router.post('/register', (req, res, next) => {
    if (req.isAuthenticated()) {
        req.flash('message', 'You are already logged in.')
        res.redirect('/profile')
    } else {
        let user = (req.body.username).toLowerCase()
        let pass = req.body.password
        let passConf = req.body.passConf
        if (user.length === 0 || pass.length === 0 || passConf.length === 0) {
            req.flash('message', 'You must provide a username, password, and password confirmation.')
            res.redirect('/login')
        } else if (pass != passConf) {
            req.flash('message', 'Your password and password confirmation must match.')
            res.redirect('/login')
        } else {
            next()
        }
    }
}, passport.authenticate('register', {
    successRedirect : '/profile',
    failureRedirect : '/register',
    failureFlash : true
}))

router.get('/logout', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User [' + req.user.username + '] has logged out.')
        req.logout()
        res.redirect('/');
    } else {
        res.redirect('/')
    }
})

router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('profile', {
            title: 'Profile',
            user: req.user,
            message: res.locals.message
        })
    } else {
        res.redirect('/login')
    }
})

router.post('/updpass', (req, res, next) => {
    if (req.isAuthenticated()) {
        let password = req.body.password
        let newpass = req.body.newpass
        let newpassconf = req.body.newpassconf
        if (password.length === 0 || newpass.length === 0 || newpassconf.length === 0) {
            req.flash('message', 'You must provide your current password, new password, and new password confirmation.')
            res.redirect('/profile')
        } else if (newpass != newpassconf) { 
            req.flash('message', 'Your password and password confirmation must match.')
            res.redirect('/profile')
        } else {
            next()
        }
    } else {
        res.redirect('/')
    }
}, passport.authenticate('updatePassword', {
    successRedirect : '/profile',
    failureRedirect : '/profile',
    failureFlash : true
}))

module.exports = router;