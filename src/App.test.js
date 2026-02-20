// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LayerScaler title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LayerScaler/i);
    expect(titleElement).toBeInTheDocument();
});
