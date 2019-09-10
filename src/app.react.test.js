import React from 'react';  
import { Hosts } from './Components/Hosts';
import renderer from 'react-test-renderer';  

it('renders correctly', () => {  
const tree = renderer.create(<Hosts />).toJSON();  
  expect(tree).toMatchSnapshot();  
});