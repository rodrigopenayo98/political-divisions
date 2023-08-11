import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Cambiamos BrowserRouter a MemoryRouter
import Nav from '../components/NavBar';

test('Nav component snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
