import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './dropdown';

test('renders dropdown options and triggers handleDropdown callback', () => {
  const handleDropdownMock = jest.fn();
  const { getByRole } = render(<Dropdown handleDropdown={handleDropdownMock} />);

  const selectElement = getByRole('combobox');
  expect(selectElement).toBeTruthy();

  fireEvent.change(selectElement, { target: { value: 'name' } });
  expect(handleDropdownMock).toHaveBeenCalledTimes(1);
  expect(selectElement.value).toBe('name');
});
