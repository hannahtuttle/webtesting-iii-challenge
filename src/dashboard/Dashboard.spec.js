// Test away

import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer'; 



import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  // write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

    it('Dasboard is rendered to page without crashing', () => {
        render(<Dashboard/>)
    })

    it("buttons text changes to reflect the state the door will be in if clicked", () => {
        //const mockFunc= jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard />);
    
        // the text is not there
        expect(queryByText(/open gate/i)).toBeFalsy();
    
        fireEvent.click(getByText(/close Gate/i));
    
        // after clicking the button, the text is there
        expect(queryByText(/open gate/i)).toBeTruthy();
      });
    
});