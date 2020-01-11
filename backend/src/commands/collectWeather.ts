import fetch from 'node-fetch';
import { Address } from '../models/incident.model';

//TODO: make this an ENV var
const weatherAPIKey = `e7fe3ab23f075a8a1670f70e3a88faf8`;
const weatherAPIURL = `https://api.darksky.net/forecast`;

export const fetchWeather = async (incidentData: Partial<Address>) => {
  const { latitude, longitude } = incidentData;

  try {
    // TODO: Change this to ensure the day requested matches the incident
    const weatherData = await fetch(
      `${weatherAPIURL}/${weatherAPIKey}/${latitude},${longitude}`
    );

    return weatherData.json();
  } catch (e) {
    console.log(` error during fetch ${e}`);
    throw e;
  }
};
