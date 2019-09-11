import React from 'react';  
import  AppRouter from '../app';
import renderer from 'react-test-renderer';  

it('renders correctly', () => {  
const tree = renderer.create(<AppRouter />).toJSON();  
  expect(tree).toMatchSnapshot();  
});

