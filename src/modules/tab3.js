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
        location.href = 'src/modules/eventsPage.html';
    });
  }