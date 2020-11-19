import { Client } from "@googlemaps/google-maps-services-js";
const client = new Client({});

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_PLACES_API_KEY;

export async function getPredictions({ input }) {
  const predictionResults = await client
    .placeAutocomplete({
      params: { input: input, key: apiKey },
    })
    .then((res) => {
      return res.data.predictions;
    })
    .catch(() => {
      return [];
    });
  return predictionResults;
}
