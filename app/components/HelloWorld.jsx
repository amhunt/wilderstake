const React = require('react');
const UnorderedList = require('./UnorderedList');

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              WilderStake
            </h1>
            <h2 className="bold">
              conservation, together
            </h2>
          </div>
          
          <div className="col">
            <img style={{ maxWidth: 500 }} src="https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Fsergei-akulich-47326.jpg?1518850404671" />
          </div>
        </div>
      </div>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React! It uses 
        only a few dependencies to get you started on working with React:</p>

      <UnorderedList items={dependenciesArray} />

      <p>Look in <code>app/components/</code> for two example components:</p>

      <UnorderedList items={componentsMade} />
    </div>
  );
}

module.exports = HelloWorld;