# HyperLocal Insights

Lightweight hyper-local market & community intelligence tool for small businesses, local organizations, and rural communities.

**Drop a pin → get zoning context, demographics, and competitor density.**

## Live demo

Once deployed on Vercel (or open `index.html` locally), you can:

- Search an address or click the map
- Scan OpenStreetMap for nearby competitors by category
- Load Census ACS demographics (free API key optional)
- Jump to the National Zoning Atlas for the area

## Deploy to Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New… → Project**.
3. Import the repository **KristineMK72/hyperlocal-insights**.
4. Leave settings at defaults (static site, root directory `.`).
5. Click **Deploy**.

Your site will be live at a `*.vercel.app` URL in under a minute. You can later add a custom domain in the Vercel project settings.

### Alternative: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Local use

Just open `index.html` in any modern browser. No build step required.

## Data sources

- **Maps & geocoding**: OpenStreetMap / Nominatim
- **Competitors**: Overpass API (OpenStreetMap)
- **Demographics**: U.S. Census Bureau ACS 5-year (optional free API key)
- **Zoning**: National Zoning Atlas (deep link)

## Notes

- Competitor coverage depends on OpenStreetMap completeness (stronger in denser areas).
- Live Census data requires a free key from [api.census.gov](https://api.census.gov/data/key_signup.html).
- Zoning is still incompletely digitized nationwide; the Atlas is the best public starting point.

Built as a lightweight alternative to full GIS tools for everyday small-business decision-making.
