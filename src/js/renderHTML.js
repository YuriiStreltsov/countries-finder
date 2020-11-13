export default function renderCountriesList(data, element, calback) {
    element.insertAdjacentHTML('beforeend', calback(data));
  }