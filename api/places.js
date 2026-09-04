export default async function handler(req, res) {
  const { lat, lng, radius } = req.query;
  const apiKey = process.env.GEOAPIFY_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing Geoapify API Key in Vercel" });
  }

  try {
    // Categories: catering (food), commercial (retail/groceries), service (banks/fuel)
    const url = `https://api.geoapify.com/v2/places?categories=catering,commercial,service&filter=circle:${lng},${lat},${radius}&limit=100&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch POIs from Geoapify" });
  }
}
