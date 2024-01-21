import Card from '@components/Card/Card';
import { fireEvent, render } from '@config/tests';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('Card Component', () => {
  it('render the component', () => {
    const { getByText } = render(<Card />);
    expect(getByText('Placeholder')).toBeInTheDocument();
  });

  it('renders the title', () => {
    const { getByText } = render(<Card title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the image', () => {
    const { getByAltText } = render(<Card imageUrl="test.jpg" />);
    expect(getByAltText('card-image')).toBeInTheDocument();
  });

  it('renders the placeholder when image is not found', () => {
    const { getByText } = render(<Card />);
    expect(getByText('Image not found')).toBeInTheDocument();
  });

  it('shows overlay on mouse enter', () => {
    const { getByTestId } = render(<Card providedLists={[1, 2, 3]} />);
    fireEvent.mouseOver(getByTestId('card-container'));
    const overlay = getByTestId('card-overlay');

    expect(overlay).toBeVisible();
  });

  it('hides overlay on mouse leave', () => {
    const { getByTestId } = render(<Card providedLists={[1, 2, 3]} />);
    fireEvent.mouseLeave(getByTestId('card-container'));
    const overlay = getByTestId('card-overlay');
    expect(overlay).not.toBeVisible();
  });

  it('calls onClick when card is clicked', () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(<Card onClick={handleClick} />);
    fireEvent.click(getByTestId('card-container'));
    expect(handleClick).toHaveBeenCalled();
  });
});
