import Select from '@components/Select/Select';
import { fireEvent, render } from '@config/tests';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

global.ResizeObserver = class ResizeObserver {
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
};
describe('Select component', () => {
  const mockOptions = [
    { value: '1', name: 'Option 1' },
    { value: '2', name: 'Option 2' },
  ];

  it('renders the component', () => {
    const { getByText } = render(<Select options={mockOptions} />);
    // resizeObserver.trigger();
    expect(getByText('Select an option')).toBeInTheDocument();
  });

  it('displays label when isLabelVisible is true', () => {
    const { getByText } = render(
      <Select label="Test label" isLabelVisible={true} options={mockOptions} />
    );
    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('does not display label when isLabelVisible is false', () => {
    const { queryByText } = render(
      <Select label="Test label" isLabelVisible={false} options={mockOptions} />
    );
    expect(queryByText('Test label')).toBeNull();
  });

  it('calls onChange function when selection changes', () => {
    const handleChange = vi.fn();
    const { getByText } = render(<Select options={mockOptions} onChange={handleChange} />);
    fireEvent.click(getByText('Select an option'));
    fireEvent.click(getByText('Option 1'));
    expect(handleChange).toHaveBeenCalled();
  });
});
