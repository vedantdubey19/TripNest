const sampleListings = [
  {
    title: "The Aetherial Haven",
    description: "Perched on a cliff edge with breathtaking ocean views, this ultra-modern sanctuary offers the ultimate luxury experience. Featuring minimalist architecture, an infinity pool, and cinematic sunset vistas, it redefined high-end coastal living.",
    image: {
      filename: "listingimage",
      url: "/images/aetherial_haven.png",
    },
    price: 45000,
    location: "Cliffside Heights",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8180, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the trees in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6784, 45.5152] }
  },
  {
    title: "Taj Mahal Panorama - Luxury Penthouse",
    description: "Enjoy an unobstructed, private view of the Taj Mahal from your ultra-modern penthouse balcony. Featuring marble interiors and world-class service, this is Agra's most exclusive address.",
    image: {
      filename: "listingimage",
      url: "/images/taj_mahal.png",
    },
    price: 5000,
    location: "Agra",
    country: "India",
    geometry: { type: "Point", coordinates: [78.0422, 27.1751] }
  },
  {
    title: "Jaipur Royal Palace Suite",
    description: "Experience the grandeur of Rajasthan in this meticulously restored palace suite. Modern luxury meets heritage architecture in the heart of the Pink City.",
    image: {
      filename: "listingimage",
      url: "/images/jaipur_palace.png",
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8163, 26.9124] }
  },
  {
    title: "Munnar Tea Estate Villa",
    description: "Wake up to misty mountains and lush green tea gardens. This contemporary glass villa offers panoramic views of Munnar's serene landscape.",
    image: {
      filename: "listingimage",
      url: "/images/munnar_villa.png",
    },
    price: 1800,
    location: "Munnar",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0601, 10.0889] }
  },
  {
    title: "Goa Beachfront Bliss",
    description: "A sleek, modern infinity pool villa on a secluded beach. Perfect for those seeking luxury, privacy, and the soothing sound of the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "/images/goa_beach.png",
    },
    price: 2500,
    location: "South Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.9299, 15.2993] }
  },
  {
    title: "Varanasi Heritage Ghats Stay",
    description: "A beautiful boutique stay on the banks of the Ganges. Immerse yourself in the spiritual heart of India with views of the ancient ghats.",
    image: {
      filename: "listingimage",
      url: "/images/varanasi_heritage.png",
    },
    price: 1200,
    location: "Varanasi",
    country: "India",
    geometry: { type: "Point", coordinates: [83.0061, 25.3176] }
  },
  {
    title: "Ladakh Starlit Eco-Yurt",
    description: "A luxury eco-resort under the brilliant stars of the Himalayas. Experience the rugged beauty of Ladakh in comfort and style.",
    image: {
      filename: "listingimage",
      url: "/images/ladakh_yurt.png",
    },
    price: 1500,
    location: "Leh-Ladakh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
  }
];

module.exports = { data: sampleListings };
