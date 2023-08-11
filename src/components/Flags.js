function getFlagImageUrl(countryCode) {
  return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
}

export default getFlagImageUrl;
