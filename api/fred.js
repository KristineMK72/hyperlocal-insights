export default async function handler(req, res) {
  const { series } = req.query;
  const apiKey = process.env.FRED_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing FRED API Key in Vercel" });
  }

  if (!series) {
    return res.status(400).json({ error: "Missing series ID" });
  }

  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${series}&api_key=${apiKey}&file_type=json&sort_order=desc&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.observations && data.observations.length > 0) {
      res.status(200).json({ 
        value: data.observations[0].value, 
        date: data.observations[0].date 
      });
    } else {
      res.status(404).json({ error: "Series data not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to communicate with FRED API" });
  }
}
