import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomCard from './card';

test('renders card with correct content', () => {
    const name = 'Sample name';
    const image = 'https://picsum.photos/640/480'
    const description = 'This is a sample card component.';

    const { getByText } = render(<CustomCard key={1} name={name} image={image} description={description} />);

    const titleElement = getByText(name);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText(description);
    expect(descriptionElement).toBeInTheDocument();
});
