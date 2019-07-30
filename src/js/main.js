"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

console.log('Witaj przybyszu!!!');

const about = document.querySelector('.main__wrapper--js');
console.log(about);
about.innerHTML = 'Witam na mojej stronie :D';

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat.`);
}

// welcome('Janek', 20);

const myAge = 20;
const myName = 'Janek';

welcome(myName, myAge);


