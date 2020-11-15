import axios from "axios";

const predictionEndpoint = process.env.REACT_APP_PREDICTION_ENDPOINT;

export async function getPredictions({ input }) {
  const predictions = await axios
    .get(predictionEndpoint, {
      headers: { "Content-Type": "application/json" },
      params: { query: input },
    })
    .then((res) => {
      return res.data.place_predictions;
    })
    .catch((err) => {
      console.log(err);
    });
  return predictions;
}
