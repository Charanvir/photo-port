import React from 'react';
// render will render the component, Jest creates a simulated DOM in the Node.js environment to approximate the DOM
// cleanup used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensures that not leftover memory data after every test, preventing false results
afterEach(cleanup);
describe('About component', () => {
    // First Test
    // it and test are interchangable in this context
    it('renders', () => {
        render(<About />)
    })

    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot();
    })

})
