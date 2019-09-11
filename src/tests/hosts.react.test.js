import React from 'react';  
import renderer from 'react-test-renderer';  
import { Hosts } from '../Components/Hosts';

it('renders correctly', () => {  
const tree = renderer.create(<Hosts/>).toJSON();  
  expect(tree).toMatchSnapshot();  
});

