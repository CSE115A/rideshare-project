import axios from "axios";

export async function getPredictions({ input }) {
  const predictions = await axios
    .get("https://www.lyft.com/api/place_autocomplete", {
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
