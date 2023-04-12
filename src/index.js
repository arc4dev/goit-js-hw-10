import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { createItem } from './createItem';
import { createInfo } from './createInfo';
import _ from 'lodash';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const input = document.getElementById('search-box');
const container = document.querySelector('.country-list');
const countryContainer = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const clearUI = () => {
  container.innerHTML = '';
  countryContainer.innerHTML = '';
};

const loadCountry = async name => {
  try {
    clearUI();

    const data = await fetchCountries(name);

    if (data.length > 10)
      return Notify.info(
        `Too many matches found. Please enter a more specific name.`
      );

    if (data.length === 1) {
      countryContainer.innerHTML = createInfo(data[0]);
    }

    const listHtml = data.map(country => createItem(country)).join('');

    container.innerHTML = listHtml;
  } catch (err) {
    console.error(err);
    Notify.failure(`Oops there is no country with that name`);
  }
};

//events
input.addEventListener(
  'input',
  _.debounce(e => {
    const value = e.target.value.trim();
    if (!value) return clearUI();

    loadCountry(value);
  }, DEBOUNCE_DELAY)
);
