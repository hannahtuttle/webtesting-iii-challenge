// Test away!

import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls';

describe('<Controls />', () => {
  // write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('controls provide buttons to toggle the closed and locked states', () => {
    render(<button></button>)
})

//   it("buttons text changes to reflect the state the door will be in if clicked", () => {
//     //const mockFunc= jest.fn();
    
//     const { getByText, queryByText } = render(<Controls />);

//     // the text is not there
//     expect(queryByText(/open gate/i)).toBeFalsy();

//     fireEvent.click(getByText(/close Gate/i));

//     // after clicking the button, the text is there
//     expect(queryByText(/open gate/i)).toBeTruthy();
//   });

it('should invoke a function when unlock or lock gate is clicked', () => {
    const mockFunc= jest.fn();
    const locked = true;
    const closed = true;

    const {getByText} = render(
    <Controls toggleLocked={mockFunc} locked={locked} closed={closed}/>)
    
    const button = getByText(/Unlock Gate/i)
    fireEvent.click(button);
    
    expect(mockFunc).toHaveBeenCalled();
})

it('the locked toggle button is disabled if the gate is open', () => {
    //const locked = true;
    const closed = false;

    const {getByText} = render(<Controls closed={closed}/>)
    const locked = getByText(/Lock Gate/i).closest('button')

    expect(locked).toBeDisabled()

})

it('the closed toggle button is disabled if the gate is locked', () => {
    //const locked = true;
    const locked = true;

    const {getByText} = render(<Controls locked={locked}/>)
    const closed = getByText(/close Gate/i).closest('button')

    expect(closed).toBeDisabled()

})

});