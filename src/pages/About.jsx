import React from 'react'
import { personDetails } from '../Details';
import Resume from '../assets/Mandela_Resume.pdf';

const About = () => {
  return (
    <main className="flex justify-center container mx-auto max-width pt-10 pb-20 "> 
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className=" text-content py-8 lg:max-w-3xl">
          {personDetails.about}
        </p>
        <a href={Resume} download>
        <button  className="bg-transparent hover:bg-blue-500 text-dark-700 font-semibold hover:text-white py-2 px-4 border border-dark-500 hover:border-transparent rounded" > Get My Resume </button>
        </a>
      </section>
    </main>
  )
}

export default About;