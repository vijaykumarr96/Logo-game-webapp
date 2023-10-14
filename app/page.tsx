import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./page.module.css";
import Products from "./components/Products";
export default function Home() {
  return (
    <main className={styles.root}>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Hero />
      </section>
      <section>
        <Products />
      </section>
    </main>
  );
}
