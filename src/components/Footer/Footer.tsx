import React from 'react';
import classes from './Footer'
import Container from 'components/Container/Container';
const Footer = () => {
  return (
    <footer>
      <Container className={`flex justify-center min-w-full bg-primary`}>
        <span className="font-semibold text-md text-center p-3 text-white lg:text-xl">
          © Triet Minh. All Rights Reserved. Designed by Mo.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
