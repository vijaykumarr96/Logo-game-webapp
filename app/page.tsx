import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.root}>
      <Navbar />
      <section>
        <Hero />
      </section>
    </main>
  );
}
