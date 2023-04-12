const API_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = async name => {
  try {
    const res = await fetch(
      `${API_URL}/${name}?fields=name,capital,population,flags,languages`
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
