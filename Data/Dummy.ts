import { CardProps } from "@/components/ui/Card";

const cardData: CardProps[] = [
  {
    image: "/icons/secure-payment.png",
    title: "Secure Shopping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
  },
  {
    image: "/icons/rate.png",
    title: "Customer Satisfaction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
  },
  {
    image: "/icons/support.png",
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
  },
  {
    image: "/icons/delivery.png",
    title: "Free Shipping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
  },
  {
    image: "/icons/transaction.png",
    title: "Secure Transaction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
  },
];

export interface ProductProps {
  id: number;
  image: string;
  product_name: string;
  price: number; // Use number
  discount_price: number; // Use number
  rating: number;
  num_reviews: number;
  stock_status: string;
  description?: string;
  color?: string;
  size?: string;
  seller_brand_name?: string;
  estimated_delivery_date?: string;
}

const productData: ProductProps[] = [
  {
    id: 1,
    image: "/flash/Smartphone.png",
    product_name: "Smartphone X",
    description:
      "Experience cutting-edge technology with the Smartphone X. Packed with features for seamless communication and entertainment.",
    price: 499.99, // No quotes
    discount_price: 449.99, // No quotes
    rating: 4.5,
    num_reviews: 120,
    stock_status: "In Stock",
    color: "Black",
    size: "M",
    seller_brand_name: "TechGenius",
    estimated_delivery_date: "Within 3 days",
  },

  {
    id: 2,
    image: "/flash/Wireless Headphones.png",
    product_name: "Wireless Headphones",
    description:
      "Experience immersive sound quality with our Wireless Headphones. Enjoy your favorite music without any wires.",
    price: 99.99,
    discount_price: 79.99,
    rating: 4.3,
    num_reviews: 85,
    stock_status: "Out of Stock",
    color: "White",
    size: "L",
    seller_brand_name: "AudioTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 3,
    image: "/flash/Laptop Pro.png",
    product_name: "Laptop Pro",
    description:
      "Boost your productivity with the Laptop Pro. Powerful performance in a sleek design, perfect for work or play.",
    price: 1199.99,
    discount_price: 999.99,
    rating: 4.8,
    num_reviews: 200,
    stock_status: "In Stock",
    color: "Black",
    size: "XL",
    seller_brand_name: "ComputeCo",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 4,
    image: "/flash/Fitness Tracker.png",
    product_name: "Fitness Tracker",
    description:
      "Stay on top of your fitness goals with our Fitness Tracker. Monitor your activity levels and improve your health.",
    price: 79.99,
    discount_price: 59.99,
    rating: 4.0,
    num_reviews: 65,
    stock_status: "Out of Stock",
    color: "Black",
    size: "S",
    seller_brand_name: "FitTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 5,
    image: "/flash/Smart Watch.png",
    product_name: "Smart Watch",
    description:
      "Stay connected and organized with our Smart Watch. Track your workouts, receive notifications, and more.",
    price: 199.99,
    discount_price: 179.99,
    rating: 4.6,
    num_reviews: 150,
    stock_status: "In Stock",
    color: "Black",
    size: "XXL",
    seller_brand_name: "TechWear",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 6,
    image: "/flash/Portable Speaker.png",
    product_name: "Portable Speaker",
    description:
      "Take your music anywhere with our Portable Speaker. Enjoy clear, crisp sound in a compact and stylish design.",
    price: 69.99,
    discount_price: 49.99,
    rating: 4.2,
    num_reviews: 80,
    stock_status: "Out of Stock",
    color: "White",
    size: "XS",
    seller_brand_name: "AudioTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 7,
    image: "/flash/Gaming Mouse.png",
    product_name: "Gaming Mouse",
    description:
      "Dominate your games with precision and style using our Gaming Mouse. Ergonomically designed for maximum comfort.",
    price: 49.99,
    discount_price: 39.99,
    rating: 4.4,
    num_reviews: 100,
    stock_status: "In Stock",
    color: "Black",
    size: "L",
    seller_brand_name: "GameGear",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 8,
    image: "/flash/Bluetooth-Earbuds.png",
    product_name: "Bluetooth Earbuds",
    description:
      "Experience wireless freedom with our Bluetooth Earbuds. Enjoy crystal-clear audio and hands-free convenience.",
    price: 129.99,
    discount_price: 99.99,
    rating: 4.7,
    num_reviews: 90,
    stock_status: "Out of Stock",
    color: "Black",
    size: "M",
    seller_brand_name: "AudioTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 9,
    image: "/flash/Tablet Pro.png",
    product_name: "Tablet Pro",
    description:
      "Enhance your digital experience with the Tablet Pro. Perfect for work, entertainment, and creativity on the go.",
    price: 699.99,
    discount_price: 649.99,
    rating: 4.4,
    num_reviews: 180,
    stock_status: "In Stock",
    color: "Silver",
    size: "L",
    seller_brand_name: "TechGenius",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 10,
    image: "/flash/Portable Speaker.png",
    product_name: "Smart Speaker",
    description:
      "Bring the power of voice control to your home with our Smart Speaker. Stream music, get weather updates, and more.",
    price: 149.99,
    discount_price: 129.99,
    rating: 4.6,
    num_reviews: 120,
    stock_status: "In Stock",
    color: "Black",
    size: "M",
    seller_brand_name: "AudioTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 11,
    image: "/flash/Digital Camera.png",
    product_name: "Digital Camera",
    description:
      "Capture life's precious moments in stunning detail with our Digital Camera. Perfect for photography enthusiasts.",
    price: 599.99,
    discount_price: 549.99,
    rating: 4.7,
    num_reviews: 150,
    stock_status: "In Stock",
    color: "Black",
    size: "M",
    seller_brand_name: "PhotoTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 12,
    image: "/flash/Smart Thermostat.png",
    product_name: "Smart Thermostat",
    description:
      "Take control of your home's climate with our Smart Thermostat. Save energy and stay comfortable all year round.",
    price: 129.99,
    discount_price: 109.99,
    rating: 4.5,
    num_reviews: 100,
    stock_status: "In Stock",
    color: "White",
    size: "M",
    seller_brand_name: "HomeTech",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 13,
    image: "/flash/Wireless Keyboard.png",
    product_name: "Wireless Keyboard",
    description:
      "Upgrade your typing experience with our Wireless Keyboard. Sleek design and responsive keys for effortless typing.",
    price: 79.99,
    discount_price: 59.99,
    rating: 4.3,
    num_reviews: 90,
    stock_status: "Out of Stock",
    color: "Black",
    size: "L",
    seller_brand_name: "TechGenius",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 14,
    image: "/flash/VR Headset.png",
    product_name: "VR Headset",
    description:
      "Immerse yourself in virtual worlds with our VR Headset. High-quality visuals and comfortable design for extended use.",
    price: 299.99,
    discount_price: 249.99,
    rating: 4.6,
    num_reviews: 110,
    stock_status: "In Stock",
    color: "Black",
    size: "L",
    seller_brand_name: "TechWear",
    estimated_delivery_date: "Within 3 days",
  },
  {
    id: 15,
    image: "/flash/SmartTV.png",
    product_name: "VisionPlus",
    description:
      "Immerse yourself in the ultimate viewing experience with VisionPlus. Enjoy stunning visuals and smart features.",
    price: 1299.99,
    discount_price: 1199.99,
    rating: 4.8,
    num_reviews: 220,
    stock_status: "In Stock",
    color: "Silver",
    size: "55 inches",
    seller_brand_name: "ViewTech",
    estimated_delivery_date: "Within 7 days",
  },
  {
    id: 16,
    image: "/flash/Drone.png",
    product_name: "SkyMaster",
    description:
      "Explore the skies with SkyMaster. Capture breathtaking aerial footage and enjoy hours of fun with this advanced drone.",
    price: 699.99,
    discount_price: 649.99,
    rating: 4.6,
    num_reviews: 170,
    stock_status: "In Stock",
    color: "White",
    size: "One Size",
    seller_brand_name: "AirTech",
    estimated_delivery_date: "Within 5 days",
  },
  {
    id: 17,
    image: "/flash/SmartHomeKit.png",
    product_name: "HomeMate",
    description:
      "Upgrade your home with HomeMate smart home kit. Control lights, appliances, and security from anywhere with your smartphone.",
    price: 199.99,
    discount_price: 179.99,
    rating: 4.8,
    num_reviews: 210,
    stock_status: "In Stock",
    color: "White",
    size: "One Size",
    seller_brand_name: "SmartTech",
    estimated_delivery_date: "Within 4 days",
  },
  {
    id: 18,
    image: "/flash/GamingConsole.png",
    product_name: "GameX",
    description:
      "Immerse yourself in gaming with GameX. Enjoy a vast library of games and cutting-edge graphics with this gaming console.",
    price: 399.99,
    discount_price: 349.99,
    rating: 4.9,
    num_reviews: 300,
    stock_status: "In Stock",
    color: "Black",
    size: "One Size",
    seller_brand_name: "PlayTech",
    estimated_delivery_date: "Within 5 days",
  },
];

export interface OurProps {
  image: string;
  product_name: string;
  price: number;
  discount_price: number;
  rating: number;
  num_reviews: number;
  stock_status: string;
  description: string;
  color: string;
  sizes: string[];
  seller_brand_name: string;
  estimated_delivery_date: string;
}

const ourData: OurProps[] = [
  {
    image: "/ourproducts/Laptop Pro X.png",
    product_name: "Laptop Pro X",
    price: 1299.99,
    discount_price: 1199.99,
    rating: 4.7,
    num_reviews: 245,
    stock_status: "In Stock",
    description:
      "The Laptop Pro X is a powerful and sleek laptop designed for productivity and entertainment.",
    color: "Silver",
    sizes: ["13-inch", "15-inch", "17-inch"],
    seller_brand_name: "TechZone",
    estimated_delivery_date: "May 1, 2024",
  },
  {
    image: "/ourproducts/Glowing Skin Serum.png",
    product_name: "Glowing Skin Serum",
    price: 39.99,
    discount_price: 29.99,
    rating: 4.5,
    num_reviews: 150,
    stock_status: "In Stock",
    description:
      "Achieve radiant and glowing skin with our Glowing Skin Serum enriched with natural ingredients.",
    color: "N/A",
    sizes: ["50ml", "100ml", "200ml"],
    seller_brand_name: "BeautyAura",
    estimated_delivery_date: "May 3, 2024",
  },
  {
    image: "/ourproducts/Wireless Earbuds.png",
    product_name: "Wireless Earbuds 2.0",
    price: 79.99,
    discount_price: 59.99,
    rating: 4.3,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Enjoy crystal-clear sound and wireless freedom with our Wireless Earbuds 2.0.",
    color: "Black",
    sizes: ["One Size"],
    seller_brand_name: "GadgetHub",
    estimated_delivery_date: "May 4, 2024",
  },
  {
    image: "/ourproducts/Classic Men's Huddy.png",
    product_name: "Classic Men's Huddy",
    price: 299.99,
    discount_price: 249.99,
    rating: 4.6,
    num_reviews: 98,
    stock_status: "In Stock",
    description:
      "Look sharp and sophisticated in our Classic Men's Suit, tailored for a perfect fit.",
    color: "Charcoal Gray",
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    seller_brand_name: "ElegantWear",
    estimated_delivery_date: "April 30, 2024",
  },
  {
    image: "/ourproducts/Modern Sectional Sofa.png",
    product_name: "Modern Sectional Sofa",
    price: 999.99,
    discount_price: 899.99,
    rating: 4.8,
    num_reviews: 120,
    stock_status: "In Stock",
    description:
      "Upgrade your living room with our Modern Sectional Sofa, featuring sleek design and plush comfort.",
    color: "Gray",
    sizes: ['85" x 105"', '90" x 110"', '100" x 120"'],
    seller_brand_name: "HomeDecor",
    estimated_delivery_date: "May 5, 2024",
  },
  {
    image: "/ourproducts/Smartphone.png",
    product_name: "Smartphone X Plus",
    price: 899.99,
    discount_price: 799.99,
    rating: 4.6,
    num_reviews: 350,
    stock_status: "In Stock",
    description:
      "Experience the latest technology with our Smartphone X Plus, featuring a stunning display and powerful performance.",
    color: "Black",
    sizes: ["64GB", "128GB", "256GB"],
    seller_brand_name: "TechZone",
    estimated_delivery_date: "May 3, 2024",
  },
  {
    image: "/ourproducts/Hydrating Facial Cream.png",
    product_name: "Hydrating Facial Cream",
    price: 29.99,
    discount_price: 19.99,
    rating: 4.4,
    num_reviews: 200,
    stock_status: "In Stock",
    description:
      "Revitalize your skin with our Hydrating Facial Cream, formulated to moisturize and nourish.",
    color: "N/A",
    sizes: ["50ml", "100ml"],
    seller_brand_name: "BeautyAura",
    estimated_delivery_date: "May 2, 2024",
  },
  {
    image: "/ourproducts/Smart Watch.png",
    product_name: "Smart Watch Pro",
    price: 149.99,
    discount_price: 129.99,
    rating: 4.7,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Stay connected and track your fitness goals with our Smart Watch Pro, featuring advanced features and sleek design.",
    color: "Silver",
    sizes: ["Small", "Medium", "Large"],
    seller_brand_name: "GadgetHub",
    estimated_delivery_date: "May 4, 2024",
  },
  {
    image: "/ourproducts/Women's Floral Dress.png",
    product_name: "Women's Floral Dress",
    price: 59.99,
    discount_price: 49.99,
    rating: 4.8,
    num_reviews: 120,
    stock_status: "In Stock",
    description:
      "Step out in style with our Women's Floral Dress, perfect for any occasion.",
    color: "Navy Blue",
    sizes: ["Small", "Medium", "Large", "XL"],
    seller_brand_name: "FashionTrend",
    estimated_delivery_date: "April 29, 2024",
  },
  {
    image: "/ourproducts/Rustic Wooden Coffee Table.png",
    product_name: "Rustic Wooden Coffee Table",
    price: 199.99,
    discount_price: 179.99,
    rating: 4.5,
    num_reviews: 150,
    stock_status: "In Stock",
    description:
      "Add a touch of elegance to your living room with our Rustic Wooden Coffee Table, crafted from high-quality wood.",
    color: "Brown",
    sizes: ["Small", "Large"],
    seller_brand_name: "HomeDecor",
    estimated_delivery_date: "May 6, 2024",
  },
  {
    image: "/ourproducts/Wireless Charging Pad.png",
    product_name: "Wireless Charging Pad",
    price: 29.99,
    discount_price: 19.99,
    rating: 4.3,
    num_reviews: 250,
    stock_status: "In Stock",
    description:
      "Charge your devices wirelessly with our Wireless Charging Pad, compatible with all Qi-enabled devices.",
    color: "White",
    sizes: ["One Size"],
    seller_brand_name: "TechZone",
    estimated_delivery_date: "May 1, 2024",
  },
  {
    image: "/ourproducts/Anti-Aging Night Cream.png",
    product_name: "Anti-Aging Night Cream",
    price: 49.99,
    discount_price: 39.99,
    rating: 4.6,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Combat signs of aging while you sleep with our Anti-Aging Night Cream, enriched with powerful antioxidants.",
    color: "N/A",
    sizes: ["50ml"],
    seller_brand_name: "BeautyAura",
    estimated_delivery_date: "May 2, 2024",
  },
  {
    image: "/ourproducts/Fitness Tracker.png",
    product_name: "Fitness Tracker Band",
    price: 49.99,
    discount_price: 39.99,
    rating: 4.4,
    num_reviews: 200,
    stock_status: "In Stock",
    description:
      "Stay motivated and track your fitness journey with our Fitness Tracker Band, featuring heart rate monitoring and activity tracking.",
    color: "Black",
    sizes: ["Small", "Medium", "Large"],
    seller_brand_name: "GadgetHub",
    estimated_delivery_date: "May 4, 2024",
  },
  {
    image: "/ourproducts/Men's Casual Shirt.png",
    product_name: "Men's Casual Shirt",
    price: 34.99,
    discount_price: 24.99,
    rating: 4.7,
    num_reviews: 150,
    stock_status: "In Stock",
    description:
      "Stay stylish and comfortable with our Men's Casual Shirt, perfect for everyday wear.",
    color: "Blue",
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    seller_brand_name: "ElegantWear",
    estimated_delivery_date: "April 30, 2024",
  },
  {
    image: "/ourproducts/Adjustable Standing Desk.png",
    product_name: "Adjustable Standing Desk",
    price: 299.99,
    discount_price: 249.99,
    rating: 4.8,
    num_reviews: 120,
    stock_status: "In Stock",
    description:
      "Enhance your productivity and comfort with our Adjustable Standing Desk, designed for ergonomic support.",
    color: "White",
    sizes: ["Small", "Medium", "Large"],
    seller_brand_name: "HomeDecor",
    estimated_delivery_date: "May 5, 2024",
  },
  {
    image: "/ourproducts/Adjustable Standing Desk.png",
    product_name: "Bluetooth Speaker",
    price: 69.99,
    discount_price: 49.99,
    rating: 4.5,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Experience immersive sound with our Bluetooth Speaker, featuring deep bass and long-lasting battery life.",
    color: "Black",
    sizes: ["One Size"],
    seller_brand_name: "GadgetHub",
    estimated_delivery_date: "May 4, 2024",
  },
  {
    image: "/ourproducts/Moisturizing Lip Balm.png",
    product_name: "Moisturizing Lip Balm",
    price: 9.99,
    discount_price: 7.99,
    rating: 4.2,
    num_reviews: 200,
    stock_status: "In Stock",
    description:
      "Keep your lips hydrated and smooth with our Moisturizing Lip Balm, enriched with shea butter and vitamin E.",
    color: "N/A",
    sizes: ["10g", "20g"],
    seller_brand_name: "BeautyAura",
    estimated_delivery_date: "May 3, 2024",
  },
  {
    image: "/ourproducts/Compact Power Bank.png",
    product_name: "Compact Power Bank",
    price: 29.99,
    discount_price: 19.99,
    rating: 4.3,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Stay charged on the go with our Compact Power Bank, featuring fast charging and a lightweight design.",
    color: "Blue",
    sizes: ["5000mAh", "10000mAh"],
    seller_brand_name: "TechZone",
    estimated_delivery_date: "May 1, 2024",
  },
  {
    image: "/ourproducts/Women's Denim Jeans.png",
    product_name: "Women's Denim Jeans",
    price: 49.99,
    discount_price: 39.99,
    rating: 4.6,
    num_reviews: 150,
    stock_status: "In Stock",
    description:
      "Achieve effortless style with our Women's Denim Jeans, designed for comfort and durability.",
    color: "Blue",
    sizes: ["Small", "Medium", "Large", "XL"],
    seller_brand_name: "FashionTrend",
    estimated_delivery_date: "April 29, 2024",
  },
  {
    image: "/ourproducts/Retro Desk Lamp.png",
    product_name: "Retro Desk Lamp",
    price: 39.99,
    discount_price: 29.99,
    rating: 4.7,
    num_reviews: 120,
    stock_status: "In Stock",
    description:
      "Add vintage charm to your workspace with our Retro Desk Lamp, featuring adjustable brightness levels.",
    color: "Black",
    sizes: ["One Size"],
    seller_brand_name: "HomeDecor",
    estimated_delivery_date: "May 6, 2024",
  },
  {
    image: "/ourproducts/Security Camera.png",
    product_name: "Smart Home Security Camera",
    price: 99.99,
    discount_price: 79.99,
    rating: 4.4,
    num_reviews: 250,
    stock_status: "In Stock",
    description:
      "Protect your home with our Smart Home Security Camera, featuring motion detection and two-way audio.",
    color: "White",
    sizes: ["One Size"],
    seller_brand_name: "TechZone",
    estimated_delivery_date: "May 2, 2024",
  },
  {
    image: "/ourproducts/Vitamin C Serum.png",
    product_name: "Vitamin C Serum",
    price: 29.99,
    discount_price: 19.99,
    rating: 4.5,
    num_reviews: 200,
    stock_status: "In Stock",
    description:
      "Rejuvenate your skin with our Vitamin C Serum, formulated to brighten and even out skin tone.",
    color: "N/A",
    sizes: ["30ml", "50ml"],
    seller_brand_name: "BeautyAura",
    estimated_delivery_date: "May 1, 2024",
  },
  {
    image: "/ourproducts/Drone.png",
    product_name: "Compact Drone",
    price: 199.99,
    discount_price: 179.99,
    rating: 4.6,
    num_reviews: 180,
    stock_status: "In Stock",
    description:
      "Capture stunning aerial footage with our Compact Drone, featuring a foldable design and HD camera.",
    color: "Black",
    sizes: ["One Size"],
    seller_brand_name: "GadgetHub",
    estimated_delivery_date: "May 3, 2024",
  },
  {
    image: "/ourproducts/Men's Casual Shorts.png",
    product_name: "Men's Casual Shorts",
    price: 24.99,
    discount_price: 19.99,
    rating: 4.8,
    num_reviews: 120,
    stock_status: "In Stock",
    description:
      "Stay cool and comfortable in our Men's Casual Shorts, perfect for outdoor activities and leisure.",
    color: "Khaki",
    sizes: ["Small", "Medium", "Large", "XL"],
    seller_brand_name: "ElegantWear",
    estimated_delivery_date: "April 30, 2024",
  },
  {
    image: "/ourproducts/Modern Dining Table.png",
    product_name: "Modern Dining Table",
    price: 499.99,
    discount_price: 449.99,
    rating: 4.7,
    num_reviews: 150,
    stock_status: "In Stock",
    description:
      "Gather family and friends around our Modern Dining Table, featuring sleek design and sturdy construction.",
    color: "Walnut",
    sizes: ["Small", "Large"],
    seller_brand_name: "HomeDecor",
    estimated_delivery_date: "May 5, 2024",
  },
];

export interface TeamProps {
  image: string;
  name: string;
  role: string;
}

const teamData: TeamProps[] = [
  {
    image: "/Team/image1.jpeg",
    name: "John Doe",
    role: "Designer",
  },
  {
    image: "/Team/image2.jpeg",
    name: "Jane Smith",
    role: "Developer",
  },
  {
    image: "/Team/image3.jpeg",
    name: "Alex Johnson",
    role: "Manager",
  },
  {
    image: "/Team/image4.jpeg",
    name: "Emily Brown",
    role: "Marketing",
  },
];

export interface ServiceProps {
  image: string;
  service_name: string;
  rate: string;
  number_of_person: number;
  payment_monthly: string;
  description: string;
  service_features: string[];
}

const serviceData: ServiceProps[] = [
  {
    image: "/service/Premium Web Hosting.jpg",
    service_name: "Premium Web Hosting",
    rate: "$9.99",
    number_of_person: 1000,
    payment_monthly: "Monthly",
    description:
      "Reliable and fast web hosting service for small to medium-sized websites.",
    service_features: [
      "99.9% Uptime Guarantee",
      "24/7 Customer Support",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
    ],
  },
  {
    image: "/service/Website Development.jpg",
    service_name: "E-commerce Website Development",
    rate: "$299",
    number_of_person: 500,
    payment_monthly: "One-time",
    description:
      "Professional e-commerce website development tailored to your business needs.",
    service_features: [
      "Custom Design",
      "Mobile Responsive",
      "Integration with Payment Gateways",
      "Product Management System",
    ],
  },
  {
    image: "/service/Digital Marketing Package.jpg",
    service_name: "Digital Marketing Package",
    rate: "$499",
    number_of_person: 200,
    payment_monthly: "Monthly",
    description:
      "Comprehensive digital marketing solution to boost your online presence.",
    service_features: [
      "SEO Optimization",
      "Social Media Management",
      "Content Creation",
      "Analytics and Reporting",
    ],
  },
  {
    image: "/service/Graphic Design Services.png",
    service_name: "Graphic Design Services",
    rate: "$49/hour",
    number_of_person: 300,
    payment_monthly: "Hourly",
    description:
      "Professional graphic design services for logos, branding, and marketing materials.",
    service_features: [
      "Unlimited Revisions",
      "Quick Turnaround Time",
      "Experienced Designers",
      "Customized Designs",
    ],
  },
  {
    image: "/service/Product Photography.webp",
    service_name: "Product Photography",
    rate: "$199/session",
    number_of_person: 150,
    payment_monthly: "One-time",
    description:
      "High-quality product photography to showcase your products effectively.",
    service_features: [
      "Studio or On-location Shoots",
      "Image Editing",
      "Fast Delivery",
      "Multiple File Formats",
    ],
  },
  {
    image: "/service/Dropshipping Consultation.png",
    service_name: "Dropshipping Consultation",
    rate: "$99",
    number_of_person: 100,
    payment_monthly: "One-time",
    description:
      "Expert consultation to start and grow your dropshipping business successfully.",
    service_features: [
      "Market Research",
      "Supplier Sourcing",
      "Store Setup Guidance",
      "Marketing Strategies",
    ],
  },
  {
    image: "/service/Social Media Management.webp",
    service_name: "Social Media Management",
    rate: "$199/month",
    number_of_person: 400,
    payment_monthly: "Monthly",
    description:
      "Effective management of your social media profiles for increased engagement and visibility.",
    service_features: [
      "Content Creation",
      "Posting Schedule",
      "Community Engagement",
      "Performance Analytics",
    ],
  },
  {
    image: "/service/Website Maintenance.jpg",
    service_name: "Website Maintenance",
    rate: "$49/month",
    number_of_person: 600,
    payment_monthly: "Monthly",
    description:
      "Regular updates and maintenance to keep your website running smoothly.",
    service_features: [
      "Security Updates",
      "Backup and Restore",
      "Content Updates",
      "Performance Optimization",
    ],
  },
];

export { cardData, productData, ourData, teamData, serviceData };
