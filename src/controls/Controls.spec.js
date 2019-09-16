// Test away!
// what is needed in order to test?
    // renderer, fireEvent + render, controls Component
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Controls from './Controls';
import { get } from 'http';

// Create a snapShot
describe('This snapshot tests the Controls Component', () => {
    it('SnapShot matches!', () => {
        const tree = renderer.create(<Controls/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should invoke a function toggle locked after the button is pressed', () => {
        const toggleLocked = jest.fn();
        const locked = true;
        const closed = true;
        const { getByText } = render(
            <Controls toggleLocked={toggleLocked} locked={locked} clsoed={closed}/>
        );
        // FireEvent
        fireEvent.click(getByText('Unlock Gate'));
        expect(toggleLocked).toHaveBeenCalled();
    });
    it('should invoke a function toggle close after button is pressed', () => {
        const toggleClosed = jest.fn();
        const locked = false;
        const closed = false;
        const { getByText } = render(
            <Controls toggleClosed={toggleClosed} locked={locked} closed={closed} />
        );
        fireEvent.click(getByText('Close Gate'));
        expect(toggleClosed).toHaveBeenCalled();
    }); //end fireEvent

    it('Check if the button is disabled', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        expect(getByText("Open Gate").disabled).toBeTruthy();
    })

}); //end of snapshot