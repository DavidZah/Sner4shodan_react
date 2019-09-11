import React from 'react';  
import renderer from 'react-test-renderer';  
import { Services } from '../Components/Service';

it('renders correctly', () => {  
    const match = { params: { id: 'foo' } }
const tree = renderer.create(<Services  required={true}
    match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>).toJSON();  
  expect(tree).toMatchSnapshot();  
});

