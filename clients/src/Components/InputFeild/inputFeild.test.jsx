import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './inputFeild';

test('allows user input and triggers handleInput callback', () => {
    const handleInputMock = jest.fn();
    const placeholderText = 'Search...';
    const userInput = 'testuser';
    render(<InputField type="text" placeholder={placeholderText} value={userInput} handleInput={handleInputMock} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: userInput } });
    expect(handleInputMock).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue(userInput);
});






