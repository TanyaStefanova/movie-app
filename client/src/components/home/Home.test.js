import Home from './Home';
import { render, screen } from '@testing-library/react';

test ('Renders home page', () => {
    render(<Home />);
});