import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ items }) => {
  return (
    <div className="footer">
      <div className="footer-menu">
        {items &&
          items.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className={item.class}>
                <a href={item.url}>{item.name}</a>
              </div>
              <div className={index == items.length - 1 ? '' : 'pipe'} />
            </div>
          ))}
      </div>
      <div className="search-box">
        <label>Search: </label>
        <input type="text" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.array.isRequired
};

export default Footer;
