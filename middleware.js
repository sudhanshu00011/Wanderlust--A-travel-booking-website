// middleware.js
const Listing = require("./models/listing.js");

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.session.returnTo = req.originalUrl;
            req.flash("error", "You must be logged in first!");
            return res.redirect("/login");
        }
        next();
    },

    isOwner: async (req, res, next) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listings");
        }

        // Allow seeded listings (no owner) + actual owner
        if (listing.owner && !listing.owner.equals(req.user._id)) {
            req.flash("error", "You are not the owner of this listing!");
            return res.redirect(`/listings/${id}`);
        }
        next();
    }
};