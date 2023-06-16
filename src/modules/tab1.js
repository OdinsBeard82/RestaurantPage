import { createMenu2 } from './tab2.js';
import { createMenu3 } from './tab3.js';
import { createMenu4 } from '/Users/danielturbak-charles/RestaurantPage/src/index.js';

export function createMenu1() {
  // Create the menu container
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');

  // Create the new page button
  const newPageButton = document.createElement('button');
  newPageButton.textContent = 'Menu';
  newPageButton.classList.add('newPage-button');
  menuContainer.appendChild(newPageButton);

  // Append the menu container to the document body
  document.body.appendChild(menuContainer);

  // Event listener for button click to toggle new page
  newPageButton.addEventListener('click', () => {
    // Clear the document body
    document.body.innerHTML = '';


    // Call the other menu creation functions
    createMenu2();
    createMenu3();
    createMenu4();

    // Create elements for the new page
    const menuPage = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Food in Valhalla';
    const menuContent = document.createElement('p');
    menuContent.textContent = 'The Mighty Thor Burger.';
    const menuImage = document.createElement('img');
    menuImage.src = '/Users/danielturbak-charles/RestaurantPage/src/assets/menu.jpg';
    menuImage.alt = 'Description of the image';

    // Append elements to the new page
    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuContent);
    menuPage.appendChild(menuImage);

    // Append the new page to the document body
    document.body.appendChild(menuPage);
  });
}
