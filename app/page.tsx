import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./page.module.css";
import Products from "./components/Products";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className={styles.root}>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Hero title="Logo Electronics" isContentNotVisible={false} />
      </section>
      <section>
        <Products />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
