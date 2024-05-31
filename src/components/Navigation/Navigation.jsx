import React from "react";
import styles from './Navigation.module.css'

function Navigation() {

  return (
    <div>
      <nav className={`${styles.navigation} container`}>
        
          <img src="/images/contact-us.svg" alt="do-some-coding-logo" />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
