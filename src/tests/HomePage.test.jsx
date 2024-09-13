import { render } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('HomePage Exists', () => {
  const { getByTestId } = render(<HomePage />);
  expect(getByTestId('hompage')).toBeInTheDocument();
});

