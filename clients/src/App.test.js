import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios'
import App from './App';

jest.mock('axios');

test('renders learn react link', async () => {
  const mockResponse = {
    data: {
      message: {
        results: [
          { name: 'Mocked Data 1', image: 'image-url-1', description: 'Mocked description 1' },
          { name: 'Mocked Data 2', image: 'image-url-2', description: 'Mocked description 2' },
        ],
        totalPages: 5,
      },
    },
  };

  axios.get.mockResolvedValue(mockResponse);

  render(<App />);

  // Test logic

  await screen.findByText('Mocked Data 1');
  await screen.findByText('Mocked Data 2');
});
