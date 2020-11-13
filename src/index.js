import './styles.css';
import './js/fetchCountries';
import API from './js/fetchCountries';
import dropDownTpl from './templates/dropdownTpl.hbs';
import contentTpl from './templates/contentTpl.hbs'
import renderHTML from './js/renderHTML'

const inputRef = document.querySelector('.js-drop-down-list');
const contentContainerRef = document.querySelector('.js-content')

inputRef.addEventListener('input', fetch)

function fetch(event) {
  const input = event.target.value;
  console.log(input);
  API.fetchCountries(`${input}`).then((data) => { 
    renderHTML(data, inputRef, dropDownTpl);
    renderHTML(data, contentContainerRef, contentTpl);
  console.log(contentTpl(data));})
}


  





