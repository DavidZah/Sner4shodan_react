import React from 'react';
import appRouter from 'app.js'
import renderer from 'react-test-renderer';
import TestRunner from 'jest-runner';

test('Test crating by dave', () => {
    const component = renderer.create(
        <appRouter/>
    );
    let tree = component.toJSON();
  
    expect(tree).toNotThrowError();
}); 
