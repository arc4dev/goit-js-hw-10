export const createInfo = country => {
  const languagesStr = Object.values(country.languages).reduce((acc, curr) => {
    if (acc === '') return `${curr}`;
    else return `${acc}, ${curr}`;
  }, '');

  return `
    <ul>
      <li>Capital: ${country.capital[0]}</li>
      <li>Population: ${country.population}</li>
      <li>Languages: ${languagesStr}</li>
    </ul>
  `;
};
