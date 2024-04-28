import { CardProps } from "@/components/ui/Card";



const cardData: CardProps[] = [
  {
    image: '/icons/secure-payment.png',
    title: 'Secure Shopping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
  {
    image: '/icons/rate.png',
    title: 'Customer Satisfaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
  {
    image: '/icons/support.png',
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
  {
    image: '/icons/delivery.png',
    title: 'Free Shipping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
  {
    image: '/icons/transaction.png',
    title: 'Secure Transaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
];

export interface ProductProps {
  image: string;
  product_name: string;
  price: string;
  discount_price: string;
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
      image: "/flash/Smartphone.png",
      product_name: "Smartphone X",
      description: "Experience cutting-edge technology with the Smartphone X. Packed with features for seamless communication and entertainment.",
      price: "$499.99",
      discount_price: "$449.99",
      rating: 4.5,
      num_reviews: 120,
      stock_status: "In Stock",
      color: "Black",
      size: "M",
      seller_brand_name: "TechGenius",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Wireless Headphones.png",
      product_name: "Wireless Headphones",
      description: "Experience immersive sound quality with our Wireless Headphones. Enjoy your favorite music without any wires.",
      price: "$99.99",
      discount_price: "$79.99",
      rating: 4.3,
      num_reviews: 85,
      stock_status: "Out of Stock",
      color: "White",
      size: "L",
      seller_brand_name: "AudioTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Laptop Pro.png",
      product_name: "Laptop Pro",
      description: "Boost your productivity with the Laptop Pro. Powerful performance in a sleek design, perfect for work or play.",
      price: "$1199.99",
      discount_price: "$999.99",
      rating: 4.8,
      num_reviews: 200,
      stock_status: "In Stock",
      color: "Black",
      size: "XL",
      seller_brand_name: "ComputeCo",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Fitness Tracker.png",
      product_name: "Fitness Tracker",
      description: "Stay on top of your fitness goals with our Fitness Tracker. Monitor your activity levels and improve your health.",
      price: "$79.99",
      discount_price: "$59.99",
      rating: 4.0,
      num_reviews: 65,
      stock_status: "Out of Stock",
      color: "Black",
      size: "S",
      seller_brand_name: "FitTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Smart Watch.png",
      product_name: "Smart Watch",
      description: "Stay connected and organized with our Smart Watch. Track your workouts, receive notifications, and more.",
      price: "$199.99",
      discount_price: "$179.99",
      rating: 4.6,
      num_reviews: 150,
      stock_status: "In Stock",
      color: "Black",
      size: "XXL",
      seller_brand_name: "TechWear",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Portable Speaker.png",
      product_name: "Portable Speaker",
      description: "Take your music anywhere with our Portable Speaker. Enjoy clear, crisp sound in a compact and stylish design.",
      price: "$69.99",
      discount_price: "$49.99",
      rating: 4.2,
      num_reviews: 80,
      stock_status: "Out of Stock",
      color: "White",
      size: "XS",
      seller_brand_name: "AudioTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Gaming Mouse.png",
      product_name: "Gaming Mouse",
      description: "Dominate your games with precision and style using our Gaming Mouse. Ergonomically designed for maximum comfort.",
      price: "$49.99",
      discount_price: "$39.99",
      rating: 4.4,
      num_reviews: 100,
      stock_status: "In Stock",
      color: "Black",
      size: "L",
      seller_brand_name: "GameGear",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Bluetooth-Earbuds.png",
      product_name: "Bluetooth Earbuds",
      description: "Experience wireless freedom with our Bluetooth Earbuds. Enjoy crystal-clear audio and hands-free convenience.",
      price: "$129.99",
      discount_price: "$99.99",
      rating: 4.7,
      num_reviews: 90,
      stock_status: "Out of Stock",
      color: "Black",
      size: "M",
      seller_brand_name: "AudioTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Tablet Pro.png",
      product_name: "Tablet Pro",
      description: "Enhance your digital experience with the Tablet Pro. Perfect for work, entertainment, and creativity on the go.",
      price: "$699.99",
      discount_price: "$649.99",
      rating: 4.4,
      num_reviews: 180,
      stock_status: "In Stock",
      color: "Silver",
      size: "L",
      seller_brand_name: "TechGenius",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Portable Speaker.png",
      product_name: "Smart Speaker",
      description: "Bring the power of voice control to your home with our Smart Speaker. Stream music, get weather updates, and more.",
      price: "$149.99",
      discount_price: "$129.99",
      rating: 4.6,
      num_reviews: 120,
      stock_status: "In Stock",
      color: "Black",
      size: "M",
      seller_brand_name: "AudioTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Digital Camera.png",
      product_name: "Digital Camera",
      description: "Capture life's precious moments in stunning detail with our Digital Camera. Perfect for photography enthusiasts.",
      price: "$599.99",
      discount_price: "$549.99",
      rating: 4.7,
      num_reviews: 150,
      stock_status: "In Stock",
      color: "Black",
      size: "M",
      seller_brand_name: "PhotoTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Smart Thermostat.png",
      product_name: "Smart Thermostat",
      description: "Take control of your home's climate with our Smart Thermostat. Save energy and stay comfortable all year round.",
      price: "$129.99",
      discount_price: "$109.99",
      rating: 4.5,
      num_reviews: 100,
      stock_status: "In Stock",
      color: "White",
      size: "M",
      seller_brand_name: "HomeTech",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/Wireless Keyboard.png",
      product_name: "Wireless Keyboard",
      description: "Upgrade your typing experience with our Wireless Keyboard. Sleek design and responsive keys for effortless typing.",
      price: "$79.99",
      discount_price: "$59.99",
      rating: 4.3,
      num_reviews: 90,
      stock_status: "Out of Stock",
      color: "Black",
      size: "L",
      seller_brand_name: "TechGenius",
      estimated_delivery_date: "Within 3 days"
    },
    {
      image: "/flash/VR Headset.png",
      product_name: "VR Headset",
      description: "Immerse yourself in virtual worlds with our VR Headset. High-quality visuals and comfortable design for extended use.",
      price: "$299.99",
      discount_price: "$249.99",
      rating: 4.6,
      num_reviews: 110,
      stock_status: "In Stock",
      color: "Black",
      size: "L",
      seller_brand_name: "TechWear",
      estimated_delivery_date: "Within 3 days"
    }
];


const serviceData = [
  {
    name: 'Service 1',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },
  {
    name: 'Service 2',
    price: 39.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut',
  },

];

export { cardData, productData, serviceData };
