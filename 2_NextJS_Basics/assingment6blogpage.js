import "../../home/home.module.css";
import Image from 'next/image'

export default function Post(){
return (
    <div className="d-blogi">
        <h1>Kovaa ajoa ja koodia pukkaa! </h1>
        <p className ="p-blogi"> 26.10.2026 
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            <Image
                src="/nextpic.jpg"
                width={300}
                height={300}
                alt="Next.js pic"
            />
            <p >
                Next.js -malli
            </p>
            <br></br>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.      
        </p>
    </div>
  );
}