import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ items }) => {
  return (
    <div className="menu">
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
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
