const celsiusInput = document.querySelector('#Celcius input');
const fahrenheitInput = document.querySelector('#Fahrenheit input');
const kelvinInput = document.querySelector('#Kelvin input');
const clearButton = document.querySelector('.button button');

// Function to update the temperature values
function updateTemperatures(celsiusValue) {
    const fahrenheitValue = (celsiusValue * 9/5)+32;
    const kelvinValue = celsiusValue + 273.15;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    kelvinInput.value = kelvinValue.toFixed(2);
}

// Function to convert temperatures when a value is entered
function convertTemperature(inputElement) {
    const inputValue = parseFloat(inputElement.value);

    if (!isNaN(inputValue)) {
        if (inputElement === celsiusInput) {
            updateTemperatures(inputValue);
        } else if (inputElement === fahrenheitInput) {
            const celsiusValue = (inputValue - 32) * 5/9;
            updateTemperatures(celsiusValue);
        } else if (inputElement === kelvinInput) {
            const celsiusValue = inputValue - 273.15;
            updateTemperatures(celsiusValue);
        }
    }
}

// Event listeners for input fields
celsiusInput.addEventListener('input', () => convertTemperature(celsiusInput));
fahrenheitInput.addEventListener('input', () => convertTemperature(fahrenheitInput));
kelvinInput.addEventListener('input', () => convertTemperature(kelvinInput));

// Event listener for the clear button
clearButton.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});

// Initialize temperature conversion
convertTemperature(celsiusInput);
