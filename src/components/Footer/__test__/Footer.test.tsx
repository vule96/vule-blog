import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Footer from '../Footer';

describe(Footer.name, () => {
  it('renders a footer', () => {
    render(<Footer />);

    const footer = screen.getByTestId('Footer__root');

    expect(footer).toBeInTheDocument();
  });
});
