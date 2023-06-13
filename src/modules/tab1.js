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
    location.href = 'src/modules/menuPage.html';
  });

}

function createSection() {
  const Header = document.createElement('h1');
  Header.classList.add('Menu');
}
