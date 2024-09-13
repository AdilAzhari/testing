import { render } from '@testing-library/react';
import HeroSection from '../components/HeroSection/HeroSection';

test('Hero Section Exists', () => {
  const { getByTestId } = render(<HeroSection />);
  expect(getByTestId('herosection1').textContent).toBe('HeroSection');
});

