import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe("ContactForm component", () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    })

    it('h1 contains the text content Contact Me', () => {
        const { getByTestId } = render(<ContactForm />)

        expect(getByTestId('contact-dataid')).toHaveTextContent("Contact")
    })

    it('button contains the text content Submit', () => {
        const { getByTestId } = render(<ContactForm />)

        expect(getByTestId('contactSubmit')).toHaveTextContent("Submit")
    })
})