# Wanderlust

A full-stack travel listing and booking platform inspired by Airbnb. Users can browse, create, edit, and review travel listings, filter listings by category, and view each listing's location on an interactive map.

## Features

- User authentication (signup, login, logout) with session-based auth
- Create, edit, and delete travel listings with image upload
- Category-based filtering (Trending, Rooms, Mountains, Castles, Camping, etc.)
- Reviews and star ratings on listings
- Interactive map view for each listing using Mapbox geocoding
- Flash messages for user feedback
- Ownership-based access control (only listing owners can edit/delete)
- Image storage via Cloudinary

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Templating:** EJS, EJS-Mate
- **Authentication:** Passport.js (passport-local, passport-local-mongoose)
- **Validation:** Joi
- **File Uploads:** Multer, Cloudinary
- **Maps & Geocoding:** Mapbox SDK
- **Sessions:** express-session, connect-flash

## Project Structure

```
├── controllers/      # Route handler logic
├── models/           # Mongoose schemas (Listing, Review, User)
├── routes/           # Express route definitions
├── views/            # EJS templates
├── public/           # Static assets (CSS, JS)
├── utils/            # Error handling utilities
├── init/             # Database seed script
├── app.js            # Application entry point
└── schema.js         # Joi validation schemas
```

## Getting Started

### Prerequisites

- Node.js installed
- A MongoDB database (local or Atlas)
- A Cloudinary account
- A Mapbox account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sudhanshu00011/Wanderlust--A-travel-booking-website.git
   cd Wanderlust--A-travel-booking-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   ATLAS_DB_URL=your_mongodb_connection_string
   SECRET_CODE=your_session_secret
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_access_token
   ```

4. Start the server
   ```bash
   node app.js
   ```

5. Visit `http://localhost:8080` in your browser

## Usage

- Sign up for a new account or log in
- Browse listings on the homepage and filter by category
- Click a listing to view details, location on the map, and reviews
- Create a new listing via the "Add Listing" option (requires login)
- Leave a review and rating on any listing
- Edit or delete listings you own

## License

This project is open source and available under the ISC License.

## Author

Sudhanshu Prasad