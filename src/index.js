import './styles.css';
import './js/fetchCountries';
import API from './js/fetchCountries';
import dropDownTpl from './templates/dropdownTpl.hbs';

const inputRef = document.querySelector('.js-drop-down-list');
API.fetchCountries('uk').then(renderCountriesList);

function renderCountriesList(data) {
  inputRef.insertAdjacentHTML('beforeend', dropDownTpl(data));
}
