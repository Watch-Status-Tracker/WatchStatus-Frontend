import { render } from '@config/tests';
import { TestComponent } from '@examples/ComponentTesting/Test/Test';
import '@testing-library/jest-dom';

// Grouping tests
describe('Example for TestComponent', () => {
  // Single test case
  it('should render the text', () => {
    /* 
    Render the component and get the instance of the 
    component using getByText method 
    */
    const { getByText } = render(<TestComponent text="Hello World" />);
    /* Check if the text is rendered properly */
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('should render the component with proper background color', () => {
    const { getByText } = render(<TestComponent text="Hello World" />);
    /* 
      Check if the component has the proper background color because
      it is styled using styled-components theme provider
    */
    expect(getByText('Hello World')).toHaveStyle(`
      background: rgb(90,32,32);
    `);
  });
});
