import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../App';

describe('Testing our app components', () => {
  test('should display hello world', async () => {
    render(<App />);
    const DOMElement = await screen.findByTestId('app-display');
    console.log(DOMElement);
    expect(DOMElement).not.toBeEmptyDOMElement();
  })
})