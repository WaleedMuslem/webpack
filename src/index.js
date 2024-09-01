import './sass/main.scss'
import dog from './asset/dog.png'

const hello = require('./js/hello')

const mainimage = document.getElementById('mainImage');
console.log(mainimage)
mainimage.src = dog;
