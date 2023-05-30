import workImage from './assets/view.png'; 
import './style.css';
const title = document.createElement('h3');
title.innerText = 'View';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = workImage;
page.appendChild(img);
