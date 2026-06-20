const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },

  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish apartment with skyline views and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    price: 2200,
    location: "New York",
    country: "United States"
  },

  {
    title: "Mountain Escape Cabin",
    description:
      "A peaceful wooden cabin surrounded by pine forests and breathtaking mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
    },
    price: 1300,
    location: "Aspen",
    country: "United States"
  },

  {
    title: "Luxury Desert Villa",
    description:
      "Experience luxury living in this stunning desert villa with a private pool and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 3500,
    location: "Dubai",
    country: "UAE"
  },

  {
    title: "Traditional Japanese House",
    description:
      "Enjoy authentic Japanese culture in this serene traditional home with tatami rooms.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1722593856418-05d6d47eec59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan"
  },

  {
    title: "Lakeview Retreat",
    description:
      "Relax beside the calm waters in this beautiful lakeside retreat with stunning morning views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    price: 1700,
    location: "Zurich",
    country: "Switzerland"
  },

  {
    title: "Rustic Farmhouse",
    description:
      "Experience countryside living in this rustic farmhouse surrounded by green fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1460317442991-0ec209397118"
    },
    price: 1200,
    location: "Tuscany",
    country: "Italy"
  },

  {
    title: "Oceanview Penthouse",
    description:
      "Luxury penthouse with panoramic ocean views and premium modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    price: 4200,
    location: "Miami",
    country: "United States"
  },

  {
    title: "Snowy Alpine Chalet",
    description:
      "A cozy chalet nestled in snowy mountains, perfect for winter adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
    },
    price: 2600,
    location: "Zermatt",
    country: "Switzerland"
  },

  {
    title: "Tropical Island Hut",
    description:
      "Enjoy tropical vibes and crystal-clear beaches in this island getaway hut.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    price: 1400,
    location: "Bali",
    country: "Indonesia"
  },

  {
    title: "Elegant Paris Studio",
    description:
      "A charming studio apartment located near iconic Parisian attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    price: 2100,
    location: "Paris",
    country: "France"
  },

  {
    title: "Forest Treehouse",
    description:
      "Reconnect with nature in this unique treehouse hidden deep inside the forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    price: 900,
    location: "Amazon",
    country: "Brazil"
  },

  {
    title: "Seaside Greek Villa",
    description:
      "Whitewashed villa with blue ocean views and peaceful Mediterranean vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    price: 2800,
    location: "Santorini",
    country: "Greece"
  },

  {
    title: "Urban Loft Apartment",
    description:
      "Industrial-style loft apartment with open spaces and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },
    price: 1900,
    location: "Chicago",
    country: "United States"
  },

  {
    title: "Safari Lodge",
    description:
      "Adventure-filled lodge experience surrounded by wildlife and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
    },
    price: 2400,
    location: "Nairobi",
    country: "Kenya"
  },

  {
    title: "Royal Heritage Palace",
    description:
      "Live like royalty in this heritage palace with traditional architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
    },
    price: 3200,
    location: "Jaipur",
    country: "India"
  },

  {
    title: "Minimal Scandinavian Home",
    description:
      "Clean and cozy Scandinavian-style home with minimalist decor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    price: 1600,
    location: "Stockholm",
    country: "Sweden"
  },

  {
    title: "Beachside Bamboo Villa",
    description:
      "Eco-friendly bamboo villa located just steps away from the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    price: 1750,
    location: "Phuket",
    country: "Thailand"
  },

  {
    title: "Luxury Downtown Condo",
    description:
      "Modern condo featuring luxury interiors and access to city nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 3100,
    location: "Toronto",
    country: "Canada"
  },

  {
    title: "Hidden Jungle Retreat",
    description:
      "A private retreat surrounded by lush greenery and jungle sounds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    price: 1450,
    location: "Costa Rica",
    country: "Costa Rica"
  },

  {
    title: "Classic English Cottage",
    description:
      "A charming countryside cottage with a beautiful flower garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472220625704-91e1462799b2"
    },
    price: 1550,
    location: "Cotswolds",
    country: "England"
  },

  {
    title: "Cliffside Ocean House",
    description:
      "Spectacular ocean house perched on a cliff with panoramic sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 3700,
    location: "Cape Town",
    country: "South Africa"
  },

  {
    title: "Luxury Ski Resort Cabin",
    description:
      "Perfect winter vacation cabin located near top skiing destinations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59"
    },
    price: 2900,
    location: "Whistler",
    country: "Canada"
  },

  {
    title: "Romantic Venice Apartment",
    description:
      "Beautiful apartment overlooking Venice canals and historic architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
    },
    price: 2300,
    location: "Venice",
    country: "Italy"
  },

  {
    title: "Modern Glass House",
    description:
      "Architectural masterpiece with glass walls and breathtaking views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    price: 4100,
    location: "Los Angeles",
    country: "United States"
  },

  {
    title: "Island Paradise Villa",
    description:
      "Private island villa with turquoise waters and luxurious comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    price: 5000,
    location: "Maldives",
    country: "Maldives"
  },

  {
    title: "Coastal Surf House",
    description:
      "Surf-inspired home perfect for beach lovers and adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    price: 1850,
    location: "Gold Coast",
    country: "Australia"
  },

  {
    title: "Historic Stone Villa",
    description:
      "A timeless stone villa with antique interiors and scenic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1460317442991-0ec209397118"
    },
    price: 2700,
    location: "Lisbon",
    country: "Portugal"
  },

  {
    title: "Peaceful Riverside Cabin",
    description:
      "Enjoy the soothing sounds of the river in this peaceful riverside cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    price: 1350,
    location: "Queenstown",
    country: "New Zealand"
  },

  {
    title: "Luxury Marina Apartment",
    description:
      "Stylish marina apartment with waterfront dining and yacht views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },
    price: 3400,
    location: "Singapore",
    country: "Singapore"
  }
];

module.exports = { data: sampleListings };