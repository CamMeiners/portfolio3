import './App.css';
import Home from './components/Home';
import Helmet from 'react-helmet';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Logo from './components/pics/logo.PNG';
import MobileNavbar from './components/MobileNavbar';
import MobileContact from './components/MobileContact';
import MobileHome from './components/MobileHome';
import MobileAbout from './components/MobileAbout';

function App() {
  const [page, setPage] = useState(1);
  const [pageWidth, setPageWidth] = React.useState(window.innerWidth);
  const mobileBreakpoint = 900;

  React.useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Cam's Portfolio</title>
        <link rel="icon" href={Logo}></link>
      </Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      {pageWidth > mobileBreakpoint ? (
        <div>
          <Navbar page={page} setPage={setPage} />
          {page === 1 && <Home />}
          {page === 2 && <About />}
          {page === 3 && <Contact />}
          <Footer page={page} setPage={setPage} />
        </div>
      ) : (
        <div>
          <MobileNavbar page={page} setPage={setPage} />
          {page === 1 && <MobileHome />}
          {page === 2 && <MobileAbout />}
          {page === 3 && <MobileContact />}
        </div>
      )}
    </div>
  );
}

export default App;
