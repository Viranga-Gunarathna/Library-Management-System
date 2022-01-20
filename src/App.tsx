import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Col, Row } from 'react-bootstrap';
import Books from './components/Books';
import Authors from './components/Authors';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/img/library.webp')` }}
    >
      <Col className=" welcome-container ">
        <Row className="nav-bar text-center position-fixed d-flex justify-content-center align-items-center w-100">
          <h1>My Library</h1>
        </Row>
        
      </Col>

      <div className="welcome-trans"></div>
      <p
        className={
          scrollPosition < 30
            ? 'text-end pe-3 py-2 m-0 add-transition bg-white opacity-100'
            : 'text-end pe-5 py-2 m-0 add-transition opacity-0'
        }
      >
        Photo by{' '}
        <a href="https://unsplash.com/@annahunko" target="_blank">
          Anna Hunko
        </a>
      </p>
      <Row className="content-container bg-white h-90vh ">
        <Col md={6} className=" p-4">
          <Books />
        </Col>
        <Col md={6} className=" p-4">
          <Authors />
        </Col>
      </Row>
    </div>
  );
}

export default App;
