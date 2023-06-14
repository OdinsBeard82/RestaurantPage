import workImage from './assets/ThorsHammer.jpg';
import './style.css';
import { createMenu1 } from './modules/tab1.js';
import { createMenu2 } from './modules/tab2.js';
import { createMenu3 } from './modules/tab3.js';


createMenu1();
createMenu2();
createMenu3();

  
const title = document.createElement('h3');
title.innerText = 'Valhalla';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = workImage;
page.appendChild(img);

const copy = document.createElement('p');
copy.innerText = 'Indulge in the divine flavors of Valhalla \
and embark on a culinary journey like no other. Our meticulously \
crafted menus, inspired by the realms of Asgard and beyond, will \
transport your taste buds to new heights of delight. Whether you \
choose the savory dishes from Tab 1, the exquisite creations from \
Tab 2, or the adventurous offerings from Tab 3, each bite will be \
a feast fit for the gods themselves. Join us at Valhalla and \
experience the magic of extraordinary cuisine that will leave you \
craving for more.';

page.appendChild(copy);

export function createMenu4() {
    // Create the home container
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');
  
    // Create the new page button
    const homePageButton = document.createElement('button');
    homePageButton.textContent = 'Home';
    homePageButton.classList.add('homePage-button');
    homeContainer.appendChild(homePageButton);
  
    // Append the menu container to the document body
    document.body.appendChild(homeContainer);
  
    // Event listener for button click to toggle new page
    homePageButton.addEventListener('click', () => {
      // Clear the document body
      document.body.innerHTML = '';

    });
};