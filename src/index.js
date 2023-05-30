import workImage from './assets/workImage.png'; 
import './style.css';
const title = document.createElement('h3');
title.innerText = 'Study view';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = workImage;
page.appendChild(img);
