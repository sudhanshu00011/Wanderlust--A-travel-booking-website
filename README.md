# 🌍 Wanderlust

> A full-stack travel listing platform where anyone can discover, share, and review unique stays around the world — from mountain retreats to arctic domes.

🔗 **Live Demo:** [wanderlust-a-travel-booking-website-wr0d.onrender.com](https://wanderlust-a-travel-booking-website-wr0d.onrender.com)

---

## 🌟 Highlights

- **Browse & filter** hundreds of unique listings across 11 categories — Trending, Rooms, Mountains, Castles, Camping, and more
- **Interactive maps** — every listing shows its exact location powered by Mapbox geocoding
- **Secure by design** — session-based authentication with ownership controls so only *you* can edit your listings
- **Full review system** — leave star ratings and comments; only authenticated users can post
- **Cloud-first media** — images upload directly to Cloudinary, no local storage hassle
- **Friendly feedback** — flash messages guide users through every action
- **Easy to run locally** — up and running in under 5 minutes with a single `npm install`

---

## ℹ️ Overview

Wanderlust is an Airbnb-inspired travel listing platform built with Node.js and Express. It lets users sign up, post their own property or experience listings (with photos, pricing, and location), browse what others have shared, and leave reviews — all backed by a MongoDB database and served through EJS-rendered views.

The platform handles everything from image uploads (via Cloudinary) and map rendering (via Mapbox) to user authentication (via Passport.js) in a clean MVC structure. Listings are validated server-side with Joi schemas before hitting the database, and sessions are persisted in MongoDB for a reliable login experience.

This project was built by **Sudhanshu Prasad** as a full-stack capstone, putting together a complete authentication flow, RESTful CRUD routes, third-party integrations, and cloud deployment into one cohesive app.

---

## 😊 Why Wanderlust?

Most travel apps are walled gardens. Wanderlust is open — anyone can sign up and post a listing in minutes. Whether it's a spare room, a farm, a boat, or a castle, if it's worth staying at, it belongs here.

The codebase is also a great learning reference for anyone building their first full-stack Node.js app. It demonstrates:

- RESTful routing with Express
- MongoDB + Mongoose schema design with references and cascading deletes
- Passport.js local authentication end-to-end
- Multer + Cloudinary for file uploads
- Mapbox geocoding integrated into a form submission flow

---

## 🚀 Quick Look

**No setup needed** — the app is live at:

👉 [https://wanderlust-a-travel-booking-website-wr0d.onrender.com](https://wanderlust-a-travel-booking-website-wr0d.onrender.com)

Sign up for a free account and you can immediately browse listings, filter by category, view locations on the map, create your own listing, and leave reviews.

If you're running it locally, the same routes are available at `http://localhost:8080`:

```
GET  /listings                  → Browse all listings
GET  /listings?category=Castles → Filter by category
GET  /listings/:id              → View a listing + map + reviews
POST /listings                  → Create a new listing (login required)
POST /listings/:id/reviews      → Leave a review (login required)
```

---

## ⬇️ Installation

**Prerequisites:**
- Node.js v18 or higher
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or a local MongoDB instance)
- A free [Cloudinary](https://cloudinary.com/) account
- A free [Mapbox](https://www.mapbox.com/) account

**Steps:**

1. Clone the repository:

```bash
git clone https://github.com/sudhanshu00011/Wanderlust--A-travel-booking-website.git
cd Wanderlust--A-travel-booking-website
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the following variables:

```env
ATLAS_DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_access_token
```

4. (Optional) Seed the database with sample listings:

```bash
node init/index.js
```

5. Start the server:

```bash
node app.js
```

6. Visit `http://localhost:8080` in your browser 🎉

---

## 📁 Project Structure

```
├── controllers/      # Route handler logic (listings, reviews, users)
├── models/           # Mongoose schemas — Listing, Review, User
├── routes/           # Express routers — listing.js, review.js, user.js
├── views/            # EJS templates + layouts
│   ├── listings/     # index, show, new, edit views
│   ├── users/        # login and signup views
│   └── includes/     # navbar, footer, flash partials
├── public/           # Static assets (CSS, client-side JS)
├── utils/            # ExpressError class, wrapAsync helper
├── init/             # Database seed script and sample data
├── app.js            # Application entry point
├── cloudConfig.js    # Cloudinary + Multer storage setup
├── middleware.js      # Auth guards, ownership checks, validation
└── schema.js         # Joi validation schemas
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js 5 |
| Database | MongoDB, Mongoose 9 |
| Templating | EJS, EJS-Mate |
| Authentication | Passport.js (passport-local, passport-local-mongoose) |
| Validation | Joi |
| File Uploads | Multer, Cloudinary |
| Maps & Geocoding | Mapbox SDK |
| Sessions | express-session, connect-mongo, connect-flash |

---

## 💭 Feedback & Contributions

Found a bug or have a feature idea? Open an [issue](https://github.com/sudhanshu00011/Wanderlust--A-travel-booking-website/issues) or start a discussion — all feedback is welcome.

If you'd like to contribute, feel free to fork the repo and open a pull request. Please make sure your changes don't break existing routes and include a brief description of what you've changed and why.

---

## 📄 License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).
