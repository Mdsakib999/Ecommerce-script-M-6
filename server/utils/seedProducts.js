require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');

const newCategories = [
    { name: "Electronics" },
    { name: "Clothing" },
    { name: "Home Appliances" },
    { name: "Beauty" },
    { name: "Books" },
    { name: "Toys" },
    { name: "Sports" },
    { name: "Automotive" }
];

const newProducts = [
    // --- Beauty (4) ---
    {
        name: "Hydrating Face Serum",
        description: "Pure hyaluronic acid serum for deep hydration and glowing skin. Suitable for all skin types.",
        imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
        price: 29.99,
        countInStock: 45,
        category: "Beauty",
        specifications: [{ key: "Size", value: "30ml" }, { key: "Type", value: "Vegan" }],
        rating: 4.7,
        numReviews: 88
    },
    {
        name: "Matte Lipstick Set",
        description: "Set of 5 long-lasting matte lipsticks in essential shades. Non-drying and highly pigmented.",
        imageUrl: "https://images.unsplash.com/photo-1586776191368-d399415d399a?q=80&w=1000&auto=format&fit=crop",
        price: 39.99,
        discountPrice: 24.99,
        countInStock: 60,
        category: "Beauty",
        specifications: [{ key: "Finish", value: "Matte" }, { key: "Shades", value: "5 Colors" }],
        rating: 4.5,
        numReviews: 120
    },
    {
        name: "Mineral Sunscreen SPF 50",
        description: "Broad-spectrum mineral sunscreen that leaves no white cast. Water-resistant and reef-safe.",
        imageUrl: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1000&auto=format&fit=crop",
        price: 18.00,
        countInStock: 100,
        category: "Beauty",
        specifications: [{ key: "SPF", value: "50" }, { key: "Weight", value: "50g" }],
        rating: 4.8,
        numReviews: 56
    },
    {
        name: "Organic Argan Hair Oil",
        description: "100% pure organic argan oil to tame frizz and add shine to your hair.",
        imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1000&auto=format&fit=crop",
        price: 22.50,
        countInStock: 30,
        category: "Beauty",
        specifications: [{ key: "Volume", value: "100ml" }, { key: "Ingredient", value: "Argan Oil" }],
        rating: 4.9,
        numReviews: 42
    },

    // --- Books (4) ---
    {
        name: "Atomic Habits",
        description: "An easy & proven way to build good habits & break bad ones by James Clear.",
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
        price: 20.00,
        countInStock: 200,
        category: "Books",
        specifications: [{ key: "Author", value: "James Clear" }, { key: "Format", value: "Hardcover" }],
        rating: 4.9,
        numReviews: 500
    },
    {
        name: "The Great Gatsby",
        description: "Classic novel by F. Scott Fitzgerald exploring themes of wealth and class in the 1920s.",
        imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
        price: 12.99,
        countInStock: 50,
        category: "Books",
        specifications: [{ key: "Author", value: "F. Scott Fitzgerald" }, { key: "Genre", value: "Classic" }],
        rating: 4.4,
        numReviews: 85
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        description: "Yuval Noah Harari explores the history of humankind from the Stone Age to the twenty-first century.",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop",
        price: 25.00,
        discountPrice: 19.99,
        countInStock: 40,
        category: "Books",
        specifications: [{ key: "Author", value: "Yuval Noah Harari" }, { key: "Pages", value: "443" }],
        rating: 4.7,
        numReviews: 320
    },
    {
        name: "Thinking, Fast and Slow",
        description: "Daniel Kahneman's exploration of the two systems that drive the way we think.",
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
        price: 18.50,
        countInStock: 25,
        category: "Books",
        specifications: [{ key: "Author", value: "Daniel Kahneman" }, { key: "Topic", value: "Psychology" }],
        rating: 4.6,
        numReviews: 145
    },

    // --- Toys (4) ---
    {
        name: "LEGO Star Wars Millennium Falcon",
        description: "Build the iconic Millennium Falcon with this detailed LEGO set featuring 7 minifigures.",
        imageUrl: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1000&auto=format&fit=crop",
        price: 159.99,
        countInStock: 10,
        category: "Toys",
        specifications: [{ key: "Pieces", value: "1351" }, { key: "Age", value: "9+" }],
        rating: 4.9,
        numReviews: 75
    },
    {
        name: "Remote Control Stunt Car",
        description: "High-speed 4WD stunt car that can flip, spin, and drive on any terrain.",
        imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1000&auto=format&fit=crop",
        price: 45.00,
        discountPrice: 34.99,
        countInStock: 35,
        category: "Toys",
        specifications: [{ key: "Drive", value: "4WD" }, { key: "Battery", value: "Rechargeable" }],
        rating: 4.3,
        numReviews: 58
    },
    {
        name: "Wooden Train Set",
        description: "Classic 50-piece wooden train set with tracks, bridges, and colorful train cars.",
        imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000&auto=format&fit=crop",
        price: 55.00,
        countInStock: 15,
        category: "Toys",
        specifications: [{ key: "Material", value: "Beech Wood" }, { key: "Pieces", value: "50" }],
        rating: 4.6,
        numReviews: 28
    },
    {
        name: "Interactive Robot Toy",
        description: "Voice-controlled robot that can dance, move, and repeat what you say.",
        imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
        price: 69.99,
        countInStock: 20,
        category: "Toys",
        specifications: [{ key: "Features", value: "Gesture Control" }, { key: "Type", value: "Smart Toy" }],
        rating: 4.5,
        numReviews: 40
    },

    // --- Sports (4) ---
    {
        name: "Yoga Mat Pro",
        description: "Eco-friendly, non-slip yoga mat with extra cushioning for maximum support.",
        imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=1000&auto=format&fit=crop",
        price: 50.00,
        countInStock: 80,
        category: "Sports",
        specifications: [{ key: "Thickness", value: "6mm" }, { key: "Material", value: "TPE" }],
        rating: 4.8,
        numReviews: 110
    },
    {
        name: "Adjustable Dumbbell Pair",
        description: "Space-saving adjustable dumbbells ranging from 2kg to 24kg each.",
        imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa20000a?q=80&w=1000&auto=format&fit=crop",
        price: 299.99,
        discountPrice: 249.99,
        countInStock: 6,
        category: "Sports",
        specifications: [{ key: "Max Weight", value: "24kg" }, { key: "Sold as", value: "Pair" }],
        rating: 4.7,
        numReviews: 25
    },
    {
        name: "Portable Basketball Hoop",
        description: "Height-adjustable basketball hoop with a durable backboard and heavy-duty base.",
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop",
        price: 180.00,
        countInStock: 4,
        category: "Sports",
        specifications: [{ key: "Adjustable", value: "2.3m to 3.05m" }, { key: "Usage", value: "Outdoor" }],
        rating: 4.4,
        numReviews: 15
    },
    {
        name: "Soccer Ball Size 5",
        description: "Official size 5 soccer ball with excellent air retention and machine-stitched durability.",
        imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
        price: 30.00,
        countInStock: 120,
        category: "Sports",
        specifications: [{ key: "Size", value: "5" }, { key: "Construction", value: "Machine-stitched" }],
        rating: 4.5,
        numReviews: 210
    },

    // --- Automotive (4) ---
    {
        name: "Portable Air Compressor",
        description: "Compact tire inflator with digital pressure gauge and auto-shutoff feature.",
        imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1000&auto=format&fit=crop",
        price: 65.00,
        countInStock: 25,
        category: "Automotive",
        specifications: [{ key: "Max Pressure", value: "150 PSI" }, { key: "Power", value: "12V DC" }],
        rating: 4.6,
        numReviews: 95
    },
    {
        name: "Dash Cam 4K",
        description: "High-resolution dash camera with night vision, wide-angle lens, and G-sensor.",
        imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop",
        price: 120.00,
        discountPrice: 89.99,
        countInStock: 18,
        category: "Automotive",
        specifications: [{ key: "Resolution", value: "4K Ultra HD" }, { key: "Lens", value: "170° Wide Angle" }],
        rating: 4.8,
        numReviews: 130
    },
    {
        name: "Microfiber Cleaning Cloths (12-pack)",
        description: "Ultra-soft, scratch-free microfiber cloths perfect for car detailing and polishing.",
        imageUrl: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=1000&auto=format&fit=crop",
        price: 15.99,
        countInStock: 150,
        category: "Automotive",
        specifications: [{ key: "Quantity", value: "12 Pack" }, { key: "Material", value: "Microfiber" }],
        rating: 4.9,
        numReviews: 450
    },
    {
        name: "Car Vacuum Cleaner",
        description: "High-power handheld vacuum cleaner with attachments for hard-to-reach areas.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        price: 40.00,
        countInStock: 40,
        category: "Automotive",
        specifications: [{ key: "Suction", value: "5000Pa" }, { key: "Filter", value: "HEPA" }],
        rating: 4.2,
        numReviews: 78
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");

        // Seed Categories
        for (const cat of newCategories) {
            await Category.findOneAndUpdate(
                { name: cat.name },
                cat,
                { upsert: true, new: true }
            );
        }
        console.log("All Categories seeded/updated successfully!");

        // Seed Products
        for (const prod of newProducts) {
            await Product.findOneAndUpdate(
                { name: prod.name },
                prod,
                { upsert: true, new: true }
            );
        }
        console.log("20 additional Products seeded/updated successfully!");

        mongoose.connection.close();
        console.log("Database connection closed.");
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDB();
