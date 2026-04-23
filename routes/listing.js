const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    }
    next();
};

// Index
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// New
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new");
});

// Create
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect(`/listings/${newListing._id}`);
}));

// Show
router.get("/:id", wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate("reviews").populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
}));

// Edit
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    res.render("listings/edit", { listing });
}));

// Update
// Update Route - FIXED Image Handling
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;

    // Get current listing to preserve image if not changed
    const currentListing = await Listing.findById(id);

    let updateData = {
        title: req.body.listing.title,
        description: req.body.listing.description,
        price: req.body.listing.price,
        location: req.body.listing.location,
        country: req.body.listing.country,
    };

    // Only update image if user provided a new URL
    if (req.body.listing.image && req.body.listing.image.trim() !== "") {
        updateData.image = {
            url: req.body.listing.image,
            filename: currentListing.image.filename || "listingimage"
        };
    } 
    // Else keep the existing image object unchanged

    await Listing.findByIdAndUpdate(id, updateData);

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}));

// Delete
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}));

module.exports = router;