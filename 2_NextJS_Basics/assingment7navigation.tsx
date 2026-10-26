import Link from "next/link";
import "../home/home.module.css";

export default function Navigation() {
  return (
      <div>
        <Link className="navi" href="/">Home</Link>
        <Link className="navi" href="/blog">Blog</Link>
      </div>
  );
}