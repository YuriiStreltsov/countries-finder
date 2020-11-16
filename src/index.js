import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import API from './js/fetchCountries';
import dropDownTpl from './templates/dropdownTpl.hbs';
import contentTpl from './templates/contentTpl.hbs';
import renderHTML from './js/renderHTML';

const debounce = require('lodash.debounce');
import './js/pnotify';
import {} from '@pnotify/core';
import { error } from '@pnotify/core';

const dropDown = document.querySelector('.js-drop-down-list');
const contentContainerRef = document.querySelector('.js-content');
const inputRef = document.querySelector('.input-countries');

inputRef.addEventListener('input', debounce(startSearch, 500));
dropDown.addEventListener('click', selectionFromSearch);

function startSearch(event) {
  const resaultQuery = event.target.value;
  if (!event) {
    return;
  }
  render(resaultQuery);
}

function render(query) {
  clearHTML(dropDown);
  clearHTML(contentContainerRef);
  API.fetchCountries(`${query}`)
    .then(data => {
      if (data.length > 10) {
        pushError(
          'Too many matches found. Please enter a more specific query!',
        );
        return;
      }
      if (data.length > 1 && data.length < 10) {
        pushError('Please select a country from the list or continue entering');
        renderHTML(data, dropDown, dropDownTpl);
        return;
      }

      if (data.length == undefined) {
        pushError('Country not found');
        return;
      }
      renderHTML(data, contentContainerRef, contentTpl);
    })
    .catch(err => {
      pushError('Please start typing latin characters');
      console.log(err);
      clearHTML(contentContainerRef);
    });
}

function clearHTML(element) {
  element.innerHTML = '';
}

function selectionFromSearch(event) {
  const result = event.target.textContent;
  inputRef.value = result;
  render(result);
}

function pushError(err) {
  error({
    text: `${err}`,
  });
}
