# Daniel's Password Generator

## Description

The goal of this project was to create a random password generator using JavaScript. I wanted to make a password generator that would lead the user through a series of prompts, asking them how long they would like their password to be, and what types of characters they would like the password to include (Uppercase, lowercase, numerals, and special characters).

This is a practical tool that allows a user to generate a highly unpredictable and safe passcode.

Through the development of this tool, I learned many aspects of how JavaScript operates:
- The establishment of variables and their values
- The use of methods: .toSpliced, Math.floor, Math.random, Math.trunc, .split, .toUpperCase, .includes, .length, .confirm, .alert, .prompt
- The declaration of functions with/without parameters
- The calling of those functions with/without arguments
- The use of arrays
- The use of iterations (while loop)

## Installation

In order to use this application, simply visit this URL:

https://danrcross.github.io/challenge-3-cross/

## Usage

When the "Generate Password" button is pressed, the user is issued through a few prompts, requesting the desired length of the password (between 8 and 128 characters), and the desired character types to be included. Once these criteria are input by the user, the password is generated and displayed in the text box. It can be copied from there.

Below are some screenshots demonstrating the steps of this process:

![Main](assets/screenshots/gen-main.png)
![Length](assets/screenshots/gen-length.png)
![Characters](assets/screenshots/gen-char.png)
![Final](assets/screenshots/gen-final.png)

## Credits

MDN was the web resource I used to better understand the various concepts/ tools I used in my code.

I must credit MDN for lines 23-25 of my script.js .

The code came from this page on the Math.random method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

(Various authors/contributors, from the JavaScript Demo: Math.random(). Page last modified on Jan 28, 2024.)

## License

MIT License used.

