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
    `https://api.opencagedata.com/geocode/v1/json?latlng=${lat},${lng}&key=${apiKey}`
  );

  const data = await response.json();
  const result = data.results[0];
  const countryComponent = result.address_components.find((component: any) =>
    component.types.includes("country")
  );

  return {
    country: countryComponent.long_name || "Unknown Country",
    formattedAddress: result.formatted_address,
  };
}
