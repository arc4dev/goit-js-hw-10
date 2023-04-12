export const createItem = country => {
  console.log(country);

  return `
    <li>
      <img width="32" height="20" src="${country.flags.svg}" alt="flag">
      <span>${country.name.official}</span>
    </li>
  `;
};
