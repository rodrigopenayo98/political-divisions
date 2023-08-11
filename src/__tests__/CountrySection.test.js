import React from 'react';
import renderer from 'react-test-renderer';
import CountrySection from '../components/CountrySection';

describe('CountrySection component', () => {
  it('renders correctly with a geonameId', () => {
    const component = renderer.create(<CountrySection geonameId="12345" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
