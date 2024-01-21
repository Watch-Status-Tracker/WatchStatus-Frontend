import Input from '@components/Input/Input';
import { fireEvent, render } from '@config/tests';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('Input component', () => {
  it('render the component', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test placeholder" />);
    expect(getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('displays label when isLabelVisible is true', () => {
    const { getByText } = render(<Input label="Test label" isLabelVisible={true} />);
    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('does not display label when isLabelVisible is false', () => {
    const { queryByText } = render(<Input label="Test label" isLabelVisible={false} />);
    expect(queryByText('Test label')).toBeNull();
  });

  it('calls onChange function when input value changes', () => {
    const handleChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Test placeholder" onChange={handleChange} />
    );
    fireEvent.change(getByPlaceholderText('Test placeholder'), { target: { value: 'New value' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
