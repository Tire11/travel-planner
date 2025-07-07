interface GeocodeResult {
  country: string;
  formattedAddress: string;
}

export async function getCountryFromCoordinates(
  lat: number,
  lng: number
): Promise<GeocodeResult> {
  const apiKey = process.env.OPENCAGE_API_KEY!;
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
  );

  const data = await response.json();
  const result = data.results[0];

  const country = result.components?.country || "Unknown Country";
  const formattedAddress = result.formatted || "Unknown Address";

  return {
    country,
    formattedAddress,
  };
}
