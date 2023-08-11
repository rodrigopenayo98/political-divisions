import getFlagImageUrl from '../components/Flags';

describe('getFlagImageUrl function', () => {
  it('returns correct URL for valid country code', () => {
    const countryCode = 'US';
    const expectedUrl = 'https://flagcdn.com/us.svg';
    const result = getFlagImageUrl(countryCode);
    expect(result).toEqual(expectedUrl);
  });

  it('returns correct URL for lowercase country code', () => {
    const countryCode = 'jp';
    const expectedUrl = 'https://flagcdn.com/jp.svg';
    const result = getFlagImageUrl(countryCode);
    expect(result).toEqual(expectedUrl);
  });

  it('returns correct URL for mixed case country code', () => {
    const countryCode = 'Au';
    const expectedUrl = 'https://flagcdn.com/au.svg';
    const result = getFlagImageUrl(countryCode);
    expect(result).toEqual(expectedUrl);
  });
});
