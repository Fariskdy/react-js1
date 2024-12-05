import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>Product Store</h1>
      <div className={styles.navbarLinks}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Products
        </a>
        <a href="#" className={styles.navLink}>
          Cart
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
