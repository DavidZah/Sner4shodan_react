import React from 'react';  
import renderer from 'react-test-renderer';  
import { Host } from '../Components/Host';

it('renders correctly', () => { 
    var x ="49.200.154.200" 
const tree = renderer.create(<Host x/>).toJSON();  
  expect(tree).toMatchSnapshot();  
});

