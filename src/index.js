import './styles.css';
import './js/fetchCountries';
import API from './js/fetchCountries';
import dropDownTpl from './templates/dropdownTpl.hbs';
import renderHTML from './js/renderHTML'

const inputRef = document.querySelector('.js-drop-down-list');
API.fetchCountries('ukraine').then(data => renderHTML(data, inputRef, dropDownTpl));


