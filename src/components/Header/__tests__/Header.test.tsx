import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Header from '../Header';

describe(Header.name, () => {
  it('renders a header navbar', () => {
    render(<Header />);

    const header = screen.getByTestId('Header__root');

    expect(header).toBeInTheDocument();
  });
});
