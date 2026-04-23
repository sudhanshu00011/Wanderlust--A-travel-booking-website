const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

router.get("/signup", (req, res) => res.render("users/signup"));
router.post("/signup", wrapAsync(async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ email, username });
  const registeredUser = await User.register(newUser, password);
  req.login(registeredUser, (err) => {
    if (err) return next(err);
    req.flash("success", "Welcome to Wanderlust!");
    res.redirect("/listings");
  });
}));

router.get("/login", (req, res) => res.render("users/login"));
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    const redirectUrl = req.session.returnTo || "/listings";
    delete req.session.returnTo;
    req.flash("success", "Welcome back to Wanderlust!");
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;