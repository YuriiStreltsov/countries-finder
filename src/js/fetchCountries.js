export default function fetchCountries(searchQuery) {
  fetch(`url${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      data;
    });
}
