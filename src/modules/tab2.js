import { createMenu1 } from './tab1.js';
import { createMenu3 } from './tab3.js';
import { createMenu4 } from '/Users/danielturbak-charles/RestaurantPage/src/index.js';

export function createMenu2() {
    // Create the menu container
    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('drinks');
  
    // Create the new page button
    const newPageButton = document.createElement('button');
    newPageButton.textContent = 'Drinks';
    newPageButton.classList.add('newPage-button');
    drinksContainer.appendChild(newPageButton);
  
    // Append the menu container to the document body
    document.body.appendChild(drinksContainer);
  
    // Event listener for button click to toggle dropdown content
    newPageButton.addEventListener('click', () => {
    // Clear the document body
    document.body.innerHTML = '';

    // Call the other menu creation functions
    createMenu1();
    createMenu3();
    createMenu4();

    // Create elements for the new page
    const menuPage = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Drinks in Valhalla';
    const menuContent = document.createElement('p');
    menuContent.textContent = 'Drinks of the Gods';
    const menuImage = document.createElement('img');
    menuImage.src = '/Users/danielturbak-charles/RestaurantPage/src/assets/drinks.jpg';
    menuImage.alt = 'Description of the image';
   
    // Append elements to the new page
    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuContent);
    menuPage.appendChild(menuImage);
   
    // Append the new page to the document body
    document.body.appendChild(menuPage);
  });
}