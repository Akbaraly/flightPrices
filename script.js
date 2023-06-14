const axios = require('axios');

const SKYSCANNER_API_KEY = 'prtl6749387986743898559646983194';

async function getFlightPrices(source, destination) {
  try {
    const response = await axios.get(
      `https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/${source}/${destination}/2023-04-15?apiKey=${SKYSCANNER_API_KEY}`
    );

    const { Quotes } = response.data;

    if (Quotes.length === 0) {
      console.log('No flight prices found for the given route.');
      return;
    }

    console.log('Flight prices from ' + source + ' to ' + destination + ':');

    Quotes.forEach((quote) => {
      console.log('Price: ' + quote.MinPrice + ' ' + quote.Currency);
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

const source = 'Delhi';
const destination = 'Jaipur';

getFlightPrices(source, destination);
