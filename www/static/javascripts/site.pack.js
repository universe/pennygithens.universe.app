// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

import { polyfill } from './scrollPolyfill.js';

polyfill();
document.getElementById('menu-button').addEventListener('click', () => {
  const el = document.getElementById('body');
  document.getElementById('body').scrollTo({ left: el.scrollLeft ? 0 : document.body.clientWidth, behavior: 'smooth' });
});