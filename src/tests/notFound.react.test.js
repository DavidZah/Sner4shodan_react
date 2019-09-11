import React from 'react';  
import renderer from 'react-test-renderer';  
import { ErrorNotFound } from '../Components/NotFound';


it('renders correctly', () => {  
const tree = renderer.create(<ErrorNotFound/>).toJSON();  
  expect(tree).toMatchSnapshot();  
});

