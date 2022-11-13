import React from 'react'

const Footer = () => {
  return (
  <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
     <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
     © 2022 Copyright:
     <a
          className="font-medium"
          href="https://github.com/mandelatuks"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mandela TM
        </a>
</p>
  </footer>
  );
}

export default Footer;