import dotenv from "dotenv";
import mongoose from "mongoose";
import Category from "./app/modules/category/category.model";
import Product from "./app/modules/product/product.model";

dotenv.config();

const categories = [
  { name: "Writing Instruments" },
  { name: "Paper Products" },
  { name: "Office Supplies" },
  { name: "Desk Accessories" },
  { name: "Filing & Storage" },
  { name: "Art Supplies" },
  { name: "Tech Accessories" },
  { name: "School Supplies" },
];

const products = [
  // Writing Instruments
  {
    name: "Pilot G2 Premium Gel Pen Set",
    brand: "Pilot",
    category: "Writing Instruments",
    price: 12.99,
    discountPrice: 9.99,
    quantity: 150,
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium gel ink pens with smooth writing experience. Set of 12 pens in assorted colors. Perfect for everyday writing, note-taking, and journaling.",
    specifications:
      "0.7mm tip, Refillable, Comfortable grip, Acid-free ink, Archival quality",
  },
  {
    name: "Parker Jotter Ballpoint Pen",
    brand: "Parker",
    category: "Writing Instruments",
    price: 24.99,
    quantity: 80,
    images: [
      "https://images.unsplash.com/photo-1565022536102-b4c0c1b0a0b0?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Classic Parker Jotter with stainless steel finish. Iconic design meets reliable performance. A timeless writing instrument for professionals.",
    specifications:
      "Stainless steel barrel, Retractable, Medium point, Refillable, Gift boxed",
  },
  {
    name: "Staedtler Triplus Fineliner Pens",
    brand: "Staedtler",
    category: "Writing Instruments",
    price: 18.99,
    discountPrice: 15.99,
    quantity: 120,
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Ergonomic triangular barrel for relaxed writing. Set of 20 brilliant colors. Ideal for writing, sketching, and coloring.",
    specifications:
      "0.3mm line width, Water-based ink, Dry safe technology, Washes out of most textiles",
  },
  {
    name: "Sharpie Permanent Markers Pack",
    brand: "Sharpie",
    category: "Writing Instruments",
    price: 14.99,
    quantity: 200,
    images: [
      "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Bold, permanent ink marks on most surfaces. Pack of 24 assorted colors. Quick-drying and fade-resistant formula.",
    specifications:
      "Fine point, Fade resistant, Water resistant, Works on most surfaces, AP certified",
  },
  {
    name: "Uni-ball Signo Gel Pens",
    brand: "Uni-ball",
    category: "Writing Instruments",
    price: 16.99,
    quantity: 90,
    images: [
      "https://images.unsplash.com/photo-1564594985645-4427c90b4686?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Smooth gel ink with pigment-based formula. Set of 12 pens. Fade-resistant and water-resistant for important documents.",
    specifications:
      "0.7mm tip, Pigment ink, Archival quality, Acid-free, Comfortable rubber grip",
  },

  // Paper Products
  {
    name: "Moleskine Classic Notebook",
    brand: "Moleskine",
    category: "Paper Products",
    price: 19.99,
    discountPrice: 16.99,
    quantity: 100,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Iconic hardcover notebook with elastic closure. 240 ruled pages of acid-free paper. Perfect for writing, sketching, and planning.",
    specifications:
      "Large size (5x8.25 inches), Ruled pages, Ribbon bookmark, Expandable inner pocket, Ivory paper",
  },
  {
    name: "Post-it Super Sticky Notes Value Pack",
    brand: "Post-it",
    category: "Paper Products",
    price: 22.99,
    quantity: 180,
    images: [
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Super sticky adhesive holds notes securely. 24 pads in assorted colors. Ideal for vertical surfaces and hard-to-stick areas.",
    specifications:
      "3x3 inches, 70 sheets per pad, Recyclable, Assorted bright colors, Repositionable",
  },
  {
    name: "Rhodia Dotpad Notepad",
    brand: "Rhodia",
    category: "Paper Products",
    price: 8.99,
    quantity: 150,
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium French paper with dot grid. 80 sheets of ultra-smooth paper. Perfect for bullet journaling and note-taking.",
    specifications:
      "A5 size, 80gsm paper, Microperforated, Orange cover, Dot grid 5mm",
  },
  {
    name: "Copy Paper Ream - 500 Sheets",
    brand: "Hammermill",
    category: "Paper Products",
    price: 9.99,
    quantity: 250,
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium multipurpose paper for everyday printing. 500 sheets per ream. Compatible with all printers and copiers.",
    specifications:
      "Letter size (8.5x11), 20lb weight, 92 brightness, Acid-free, Jam-free guarantee",
  },
  {
    name: "Sticky Notes Assorted Sizes",
    brand: "Post-it",
    category: "Paper Products",
    price: 12.99,
    discountPrice: 10.99,
    quantity: 200,
    images: [
      "https://images.unsplash.com/photo-1586281380426-1a9e4a0d6f12?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Variety pack with multiple sizes and colors. 15 pads total. Great for organizing, reminders, and color-coding.",
    specifications:
      "Multiple sizes, Bright colors, Repositionable, Recyclable, Value pack",
  },

  // Office Supplies
  {
    name: "Swingline Stapler with Staples",
    brand: "Swingline",
    category: "Office Supplies",
    price: 15.99,
    quantity: 75,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Durable desktop stapler with jam-free performance. Includes 1000 staples. Staples up to 20 sheets at once.",
    specifications:
      "20 sheet capacity, Metal construction, Non-slip base, Includes staples, Limited lifetime warranty",
  },
  {
    name: "Scotch Magic Tape 6-Pack",
    brand: "Scotch",
    category: "Office Supplies",
    price: 11.99,
    quantity: 160,
    images: [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Invisible when applied, matte finish. 6 rolls with dispensers. Ideal for gift wrapping, mending, and office use.",
    specifications:
      "3/4 inch x 1000 inches per roll, Photo safe, Writable surface, Pulls off smoothly",
  },
  {
    name: "Paper Clips Assorted Sizes",
    brand: "Acco",
    category: "Office Supplies",
    price: 6.99,
    quantity: 300,
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Smooth finish paper clips in assorted sizes. 1000 clips total. Rust-resistant and durable for everyday use.",
    specifications:
      "Assorted sizes, Rust-resistant, Smooth edges, Reusable, Value pack",
  },
  {
    name: "Binder Clips Assortment",
    brand: "Acco",
    category: "Office Supplies",
    price: 8.99,
    quantity: 220,
    images: [
      "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Strong steel construction with easy-grip handles. Assorted sizes for various needs. 60 clips per pack.",
    specifications:
      "Small, medium, large sizes, Steel construction, Removable handles, Rust-resistant",
  },
  {
    name: "Scissors 8-Inch Professional",
    brand: "Fiskars",
    category: "Office Supplies",
    price: 9.99,
    discountPrice: 7.99,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1589395937772-5d3c4c6a7f8e?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium stainless steel blades with comfortable handles. Ideal for cutting paper, cardboard, and fabric. Lifetime warranty.",
    specifications:
      "8-inch length, Stainless steel, Ergonomic handle, Ambidextrous, Lifetime warranty",
  },

  // Desk Accessories
  {
    name: "Mesh Desk Organizer Set",
    brand: "Fellowes",
    category: "Desk Accessories",
    price: 24.99,
    discountPrice: 19.99,
    quantity: 60,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "5-piece mesh desk organizer set. Includes pen holder, letter tray, and accessories. Durable steel mesh construction.",
    specifications:
      "5 pieces, Steel mesh, Black finish, Space-saving design, Non-slip feet",
  },
  {
    name: "Wooden Pen Holder with Phone Stand",
    brand: "Marbrasse",
    category: "Desk Accessories",
    price: 18.99,
    quantity: 85,
    images: [
      "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Natural wood desk organizer with multiple compartments. Includes phone stand slot. Elegant and functional design.",
    specifications:
      "Natural wood, 9 compartments, Phone stand, Business card holder, Eco-friendly",
  },
  {
    name: "Acrylic Desk Organizer",
    brand: "Sorbus",
    category: "Desk Accessories",
    price: 21.99,
    quantity: 70,
    images: [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Clear acrylic organizer with multiple compartments. Modern minimalist design. Perfect for pens, scissors, and office supplies.",
    specifications:
      "Clear acrylic, 6 compartments, Stackable, Easy to clean, Modern design",
  },
  {
    name: "Desk Pad Calendar 2025",
    brand: "AT-A-GLANCE",
    category: "Desk Accessories",
    price: 12.99,
    quantity: 120,
    images: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Large desk pad calendar with monthly view. 12 months (Jan-Dec 2025). Tear-off sheets with notes section.",
    specifications:
      "22 x 17 inches, Monthly format, Tear-off sheets, Notes section, Reinforced corners",
  },
  {
    name: "Leather Desk Mat",
    brand: "Knodel",
    category: "Desk Accessories",
    price: 29.99,
    discountPrice: 24.99,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium PU leather desk mat with stitched edges. Dual-sided design. Protects desk surface while adding elegance.",
    specifications:
      "31.5 x 15.7 inches, PU leather, Dual-sided, Waterproof, Non-slip backing",
  },

  // Filing & Storage
  {
    name: "File Folders Letter Size 100-Pack",
    brand: "Pendaflex",
    category: "Filing & Storage",
    price: 16.99,
    quantity: 140,
    images: [
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Manila file folders with 1/3-cut tabs. 100 folders per box. Durable construction for long-lasting use.",
    specifications:
      "Letter size, 1/3-cut tabs, 11-point stock, Assorted positions, Acid-free",
  },
  {
    name: "3-Ring Binder Set of 4",
    brand: "Samsill",
    category: "Filing & Storage",
    price: 19.99,
    discountPrice: 16.99,
    quantity: 90,
    images: [
      "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Durable 1.5-inch round ring binders. Set of 4 in assorted colors. Clear overlay for customization.",
    specifications:
      "1.5 inch rings, 375 sheet capacity, Clear overlay pockets, Assorted colors, Durable construction",
  },
  {
    name: "Plastic Storage Boxes with Lids",
    brand: "Sterilite",
    category: "Filing & Storage",
    price: 24.99,
    quantity: 75,
    images: [
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Clear plastic storage boxes for office supplies. Set of 6 with snap-on lids. Stackable design saves space.",
    specifications:
      "Set of 6, Clear plastic, Snap-on lids, Stackable, Letter/legal size",
  },
  {
    name: "Hanging File Folders 25-Pack",
    brand: "Pendaflex",
    category: "Filing & Storage",
    price: 14.99,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Standard green hanging folders with tabs and inserts. 25 folders per box. Fits standard file drawers.",
    specifications:
      "Letter size, Includes tabs and inserts, Reinforced tops, Standard green, Coated rod tips",
  },
  {
    name: "Desktop File Organizer",
    brand: "Fellowes",
    category: "Filing & Storage",
    price: 22.99,
    quantity: 65,
    images: [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Vertical file organizer with 8 compartments. Holds letter-size documents. Sturdy steel mesh construction.",
    specifications:
      "8 compartments, Steel mesh, Letter size, Space-saving, Non-slip feet",
  },

  // Art Supplies
  {
    name: "Faber-Castell Colored Pencils 48-Pack",
    brand: "Faber-Castell",
    category: "Art Supplies",
    price: 24.99,
    discountPrice: 21.99,
    quantity: 95,
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium colored pencils with vibrant pigments. Set of 48 colors in metal tin. Soft color laydown for blending.",
    specifications:
      "48 colors, Break-resistant leads, Water-resistant, Non-toxic, Metal storage tin",
  },
  {
    name: "Acrylic Paint Set 24 Colors",
    brand: "Arteza",
    category: "Art Supplies",
    price: 32.99,
    quantity: 70,
    images: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Professional acrylic paints in 24 vibrant colors. Rich pigmentation and smooth consistency. Perfect for canvas, wood, and more.",
    specifications:
      "24 colors, 12ml tubes, Non-toxic, Lightfast, Quick-drying formula",
  },
  {
    name: "Watercolor Paint Set with Brushes",
    brand: "Winsor & Newton",
    category: "Art Supplies",
    price: 28.99,
    discountPrice: 24.99,
    quantity: 60,
    images: [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Professional watercolor set with 12 colors. Includes 3 brushes and mixing palette. Brilliant, transparent colors.",
    specifications:
      "12 colors, Includes brushes, Mixing palette, Artist quality, Portable case",
  },
  {
    name: "Sketch Pad 100 Sheets",
    brand: "Strathmore",
    category: "Art Supplies",
    price: 14.99,
    quantity: 130,
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Premium sketch paper for pencil, charcoal, and pen. 100 sheets of acid-free paper. Spiral-bound for easy use.",
    specifications:
      "9x12 inches, 100 sheets, 60lb paper, Acid-free, Spiral-bound",
  },
  {
    name: "Paint Brush Set 15 Pieces",
    brand: "Artify",
    category: "Art Supplies",
    price: 16.99,
    quantity: 85,
    images: [
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Professional paint brush set with various sizes and shapes. Suitable for acrylic, oil, and watercolor. Includes storage case.",
    specifications:
      "15 brushes, Multiple sizes, Synthetic bristles, Wooden handles, Storage case included",
  },

  // Tech Accessories
  {
    name: "USB Flash Drive 64GB 3-Pack",
    brand: "SanDisk",
    category: "Tech Accessories",
    price: 19.99,
    discountPrice: 16.99,
    quantity: 180,
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "High-speed USB 3.0 flash drives. 64GB capacity each. Reliable storage for documents, photos, and videos.",
    specifications:
      "64GB capacity, USB 3.0, Pack of 3, Password protection, 5-year warranty",
  },
  {
    name: "Cable Management Organizer Kit",
    brand: "JOTO",
    category: "Tech Accessories",
    price: 12.99,
    quantity: 150,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Complete cable management solution. Includes cable clips, sleeves, and ties. Keep your desk organized and tidy.",
    specifications:
      "Multiple pieces, Adhesive clips, Cable sleeves, Reusable ties, Easy installation",
  },
  {
    name: "Extended Mouse Pad",
    brand: "Ktrio",
    category: "Tech Accessories",
    price: 14.99,
    quantity: 120,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Large extended mouse pad for keyboard and mouse. Waterproof surface with non-slip rubber base. Smooth tracking.",
    specifications:
      "31.5 x 15.7 inches, Waterproof, Non-slip base, Stitched edges, Easy to clean",
  },
  {
    name: "Wireless Keyboard and Mouse Combo",
    brand: "Logitech",
    category: "Tech Accessories",
    price: 39.99,
    discountPrice: 34.99,
    quantity: 80,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Reliable wireless keyboard and mouse set. 2.4GHz connection with long battery life. Comfortable typing experience.",
    specifications:
      "Wireless 2.4GHz, Long battery life, Quiet keys, Plug and play, 3-year warranty",
  },
  {
    name: "Laptop Stand Adjustable",
    brand: "Rain Design",
    category: "Tech Accessories",
    price: 49.99,
    quantity: 55,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Aluminum laptop stand with adjustable height. Improves ergonomics and airflow. Compatible with all laptop sizes.",
    specifications:
      "Aluminum construction, Adjustable height, Cable management, Non-slip pads, Supports up to 17 inch laptops",
  },

  // School Supplies
  {
    name: "School Backpack with Laptop Compartment",
    brand: "JanSport",
    category: "School Supplies",
    price: 44.99,
    discountPrice: 39.99,
    quantity: 90,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Durable backpack with padded laptop sleeve. Multiple compartments for organization. Comfortable padded straps.",
    specifications:
      "Laptop compartment, Multiple pockets, Padded straps, Water-resistant, Lifetime warranty",
  },
  {
    name: "Scientific Calculator",
    brand: "Texas Instruments",
    category: "School Supplies",
    price: 24.99,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "TI-30X IIS scientific calculator. Two-line display with advanced functions. Ideal for students and professionals.",
    specifications:
      "Two-line display, 241 functions, Solar and battery powered, Durable design, Approved for standardized tests",
  },
  {
    name: "Composition Notebooks 6-Pack",
    brand: "Mead",
    category: "School Supplies",
    price: 11.99,
    quantity: 200,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Classic composition notebooks with wide-ruled pages. 100 sheets per notebook. Durable covers in assorted colors.",
    specifications:
      "Wide-ruled, 100 sheets each, Pack of 6, Assorted colors, Sewn binding",
  },
  {
    name: "Pencil Case with Compartments",
    brand: "Easthill",
    category: "School Supplies",
    price: 13.99,
    quantity: 140,
    images: [
      "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Large capacity pencil case with multiple compartments. Durable canvas material. Perfect for storing pens, pencils, and supplies.",
    specifications:
      "Large capacity, Multiple compartments, Durable canvas, Zipper closure, Portable handle",
  },
  {
    name: "Graphing Calculator",
    brand: "Texas Instruments",
    category: "School Supplies",
    price: 89.99,
    discountPrice: 79.99,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "TI-84 Plus graphing calculator. Advanced graphing and statistical functions. Essential for high school and college math.",
    specifications:
      "Graphing display, USB connectivity, Preloaded apps, Rechargeable battery, Approved for AP exams",
  },
  {
    name: "Index Cards 500-Pack",
    brand: "Oxford",
    category: "School Supplies",
    price: 7.99,
    quantity: 180,
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop",
    ],
    inStock: true,
    description:
      "Ruled index cards for studying and organizing. 500 cards in convenient storage box. Perfect for flashcards and notes.",
    specifications:
      "3x5 inches, Ruled, 500 cards, Storage box included, Acid-free",
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce";
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to MongoDB");

    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log("\n🗑️  Clearing existing categories and products...");
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log("✅ Cleared existing data");

    // Seed categories
    console.log("\n📁 Seeding categories...");
    const createdCategories = await Category.insertMany(categories);
    console.log(`✅ Created ${createdCategories.length} categories`);

    // Seed products
    console.log("\n📦 Seeding products...");
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ Created ${createdProducts.length} products`);

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log("✨ DATABASE SEEDING COMPLETED SUCCESSFULLY!");
    console.log("=".repeat(50));
    console.log(`\n📊 Summary:`);
    console.log(`   Categories: ${createdCategories.length}`);
    console.log(`   Products: ${createdProducts.length}`);
    console.log(`\n📋 Categories created:`);
    createdCategories.forEach((cat) => {
      const productCount = products.filter((p) => p.category === cat.name).length;
      console.log(`   - ${cat.name} (${productCount} products)`);
    });

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
