const React = require('react');

const items = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contribute',
    url: '/contribute',
  },
  {
    name: 'Vote',
    url: '/vote',
  },
]

const Header = function() {
  return (
    <div style={{ float: 'right', paddingTop: 6 }}>
      {items.map((item, i) => (
        <span style={{ fontSize: 20, paddingRight: 12 }} key={i}>
          <a style={{ color: '#333' }} href={item.href}>{item.name}</a>
        </span>
      ))}
    </div>
  );
}

module.exports = Header;