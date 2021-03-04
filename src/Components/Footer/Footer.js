import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ toggleFooter }) {
  return (
    <footer>
      <Link to='/' onClick={toggleFooter}> 
        <button>home</button>
      </Link>
      <Link>
        <button>Start Reading</button>
      </Link>
      <Link>
        <button>Saved Readings</button>
      </Link>
    </footer>
  );
}

export default Footer;