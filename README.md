# Calculator App

A React-based calculator application that meets all FreeCodeCamp requirements for the JavaScript Calculator project.

## Features

- **Complete Calculator Functionality**: All basic arithmetic operations (+, -, ×, ÷)
- **Decimal Support**: Handles decimal numbers with precision
- **Clear Function**: Resets calculator to initial state
- **Consecutive Operators**: Handles multiple operators correctly
- **Precision**: Supports calculations with up to 6 decimal places
- **Responsive Design**: Works on desktop and mobile devices

## User Stories Implemented

✅ **User Story #1**: Calculator contains a clickable element with id="equals"  
✅ **User Story #2**: Calculator contains 10 clickable elements with IDs "zero" through "nine"  
✅ **User Story #3**: Calculator contains 4 clickable elements with IDs "add", "subtract", "multiply", "divide"  
✅ **User Story #4**: Calculator contains a clickable element with id="decimal"  
✅ **User Story #5**: Calculator contains a clickable element with id="clear"  
✅ **User Story #6**: Calculator contains an element with id="display"  
✅ **User Story #7**: Clear button resets calculator to initialized state  
✅ **User Story #8**: Input numbers are displayed in the display element  
✅ **User Story #9**: Chain calculations work correctly with = button  
✅ **User Story #10**: Multiple leading zeros are not allowed  
✅ **User Story #11**: Decimal points append correctly, no double decimals  
✅ **User Story #12**: Operations work with decimal numbers  
✅ **User Story #13**: Consecutive operators use the last one entered  
✅ **User Story #14**: Pressing operator after = starts new calculation  
✅ **User Story #15**: Calculator has precision for decimal calculations  

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Technologies Used

- React 18.2.0
- CSS3 with Grid and Flexbox
- JavaScript ES6+
- FreeCodeCamp Test Suite

## Calculator Logic

This calculator uses **formula logic** which observes order of operation precedence, similar to the reference calculator. This means:
- Operations follow mathematical order of operations (PEMDAS)
- Consecutive operators use the last one entered
- Results are calculated when the equals button is pressed

## Testing

The app includes the FreeCodeCamp test suite. All tests should pass when running the application.

## Design

The calculator features a modern, iOS-inspired design with:
- Dark theme with orange accent colors
- Smooth animations and hover effects
- Responsive layout for different screen sizes
- Clean typography and spacing 