import "../home/home.module.css";
import Post from "./post/page";
import Navigation from "../components/Navigation";

export default function Blog(){
return (
    <div>
        <Navigation />
        <Post />
    </div>
  );
}