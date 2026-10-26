// import Link from 'next/link'
import About from "./about/page";
import Navigation from "./components/Navigation";
export default function Home() {
  return (
    <div>
      <main>
        <Navigation />
        <About />
        <br></br>
        {/* <Link href="/about">Go to About Page</Link> */}
      </main>
    </div>
  );
}