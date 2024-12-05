import Navbar from "../components/Navbar";
import styles from "./ProductListing.module.css";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Noise-canceling over-ear headphones with 40-hour battery life",
    price: 199.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS tracking",
    price: 149.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 360-degree sound and 12-hour battery",
    price: 79.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Digital Camera",
    description:
      "Mirrorless camera with 4K video recording and wifi connectivity",
    price: 599.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Laptop Backpack",
    description:
      "Slim design with padded laptop compartment and multiple pockets",
    price: 59.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Wireless Earbuds",
    description:
      "True wireless earbuds with noise cancellation and touch controls",
    price: 129.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with programmable buttons",
    price: 49.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "Portable Power Bank",
    description: "20000mAh fast charging power bank with multiple ports",
    price: 39.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: "Fitness Tracker",
    description: "Slim fitness band with sleep tracking and water resistance",
    price: 89.99,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 10,
    title: "Wireless Charger",
    description: "Fast charging pad compatible with multiple devices",
    price: 29.99,
    image: "https://via.placeholder.com/300x200",
  },
];

const ProductListing = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productContent}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productPrice}>
                ${product.price.toFixed(2)}
              </div>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
