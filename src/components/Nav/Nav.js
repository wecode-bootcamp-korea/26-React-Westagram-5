import React from 'react';
import '../../styles/common.scss';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <div>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="wefont">
              <h3 className="we">
                <a>WESTAGRAM</a>
              </h3>
            </div>
          </div>

          <div className="searchbar">
            <input type="text" placeholder="검색" />
          </div>

          <div className="nav">
            <div className="navo"></div>
            <div className="navt"></div>
            <div className="navh"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
