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
        location.href = 'src/modules/drinksPage.html';
    });
  }