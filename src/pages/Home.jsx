import React, { useRef } from "react";
import { personDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="profile img" />
      </div>
    </main>
  );
}

export default Home;