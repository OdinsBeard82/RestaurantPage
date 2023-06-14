import { createMenu1 } from '/Users/danielturbak-charles/RestaurantPage/src/modules/tab1.js';
import { createMenu2 } from '/Users/danielturbak-charles/RestaurantPage/src/modules/tab2.js';
import { createMenu4 } from '/Users/danielturbak-charles/RestaurantPage/src/index.js';

export function createMenu3() {
    // Create the menu container
    const eventsContainer = document.createElement('div');
    eventsContainer.classList.add('events');
  
    // Create the new page button
    const newPageButton = document.createElement('button');
    newPageButton.textContent = 'Events';
    newPageButton.classList.add('newPage-button');
    eventsContainer.appendChild(newPageButton);
  
    // Append the menu container to the document body
    document.body.appendChild(eventsContainer);
  
    // Event listener for button click to toggle dropdown content
    newPageButton.addEventListener('click', () => {
               // Clear the document body
    document.body.innerHTML = '';

    // Call the other menu creation functions
    createMenu1();
    createMenu2();
    createMenu4();

   
    // Create elements for the new page
    const menuPage = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Events in Valhalla';
    const menuContent = document.createElement('p');
    menuContent.textContent = 'Insert your menu content here.';
    const menuImage = document.createElement('img');
    menuImage.src = '/Users/danielturbak-charles/RestaurantPage/src/assets/events.jpg';
    menuImage.alt = 'Description of the image';
   
    // Append elements to the new page
    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuContent);
    menuPage.appendChild(menuImage);
   
    // Append the new page to the document body
    document.body.appendChild(menuPage);
  });
}