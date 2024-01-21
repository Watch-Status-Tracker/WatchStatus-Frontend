import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import { fireEvent, render } from '@config/tests';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

describe('NavbarItem', () => {
  const mockOnClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavbarItem text="Home" to="/" onClick={mockOnClick} variant="full" />
      </MemoryRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavbarItem text="Home" to="/" onClick={mockOnClick} variant="full" />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Home'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders correctly when text is provided', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavbarItem text="Home" to="/" onClick={mockOnClick} variant="full" />
      </MemoryRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders correctly when icon is provided', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavbarItem
          text="Home"
          to="/"
          onClick={mockOnClick}
          variant="full"
          icon={<div data-testid="icon" />}
        />
      </MemoryRouter>
    );

    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('renders correctly when variant is compact', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavbarItem text="Home" to="/" onClick={mockOnClick} variant="compact" test={'test-bar'} />
      </MemoryRouter>
    );

    expect(getByTestId('test-bar')).toBeInTheDocument();
  });
});
