import profile from "./assets/profile.jpeg";
import logo from "./assets/logo.svg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import rails from "./assets/techstack/rails.png";
import ruby from "./assets/techstack/ruby4.png";

import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

export const logos = {
  logo: logo
};

export const personDetails = {
  name: "Mandela",
  tagline: "I’m a software developer",
  img: profile,
  about: "I can help you build a product , feature or website Look through some of my work and experience If you like what you see and have a project you need coded,don’t hesitate to contact me.",
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mandela-t/",
  github: "https://github.com/mandelatuks",
  twitter: "https://twitter.com/MandelaTm1",
};

export const techstackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  ruby: ruby,
  rails: rails,
};

export const projectDetails = [
  {
    title: "Oga-Dela Arts",
    image: projectImage1,
    description: `This Oga-Dela Arts Gallery website which displays different Arts and users can like and comment on any art All data is preserved thanks to the external Art Institute of Chicago.`,
    techstack: "HTML,CSS, JavaScript, Api",
    previewLink: "https://mandelatuks.github.io/v1/oga-dela-art.netlify.app/",
    githubLink: "https://github.com/mandelatuks/ART-JavaScript-Capstone",
  },
  {
    title: "Budget App",
    image: projectImage2,
    description: `Money Wallet is a mobile web application that allows you to manage your budget.`,
    techstack: "Ruby on rails, Boostrap,Postgresql",
    previewLink: "https://mighty-plains-68460.herokuapp.com/",
    githubLink: "https://github.com/mandelatuks/Budget-app",
  },
  {
    title: "Recipe App",
    image: projectImage3,
    description: `The Recipe app keeps track of all your recipes, ingredients, and inventory.`,
    techstack: "Ruby on rails, Boostrap,Postgresql",
    previewLink: "https://lit-crag-70167.herokuapp.com/",
    githubLink: "https://github.com/mandelatuks/Recipe-ap",
  },
  {
    title: "Space Travelers' Booking Hub",
    image: projectImage4,
    description: `This application keeps track of the mission and rockets. It also gives users the best user experience.`,
    techstack: "React,Redux,css,Javasript",
    previewLink: "https://delightful-stardust-098730.netlify.app/",
    githubLink: "https://github.com/mandelatuks/space-travelers-hub",
  },
  {
    title: "To Do List",
    image: projectImage5,
    description: `This is the do list which can help an individual in their daily life so with this an individual can delete and add a task`,
    techstack: "css,JavaScript,html",
    previewLink: "https://mandelatuks.github.io/To-do-list-webApps/",
    githubLink: "https://github.com/mandelatuks/To-do-list-webApps",
  },
  {
    title: "Doctor Appoinments App",
    image: projectImage6,
    description: `An application that allows one to book an appointment with a doctor. and it provide the admin user to all the activity of the app`,
    techstack: "Ruby on rails,css,React,Redux",
    previewLink: "https://doctor-appointment-frontend.netlify.app/",
    githubLink: "https://github.com/jmoseka/doctor_appointment_frontend",
  },
];

export const contactDetails = {
  email: "manderat206@gmail.com",
};