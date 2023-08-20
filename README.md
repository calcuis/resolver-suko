## suko-resolver

This JavaScript code defines a puzzle-solving interface for a 3x3 grid with cells labeled from 'a' to 'i'. Each cell can be associated with a value between 1 and 9. The purpose of the code is to solve the puzzle by finding a combination of values for the cells such that specific sums of cell values within predefined groups are satisfied. Here's a breakdown of the code:

`setCircleValue` Function: This function takes a `circleName` parameter and returns an event listener function that updates a designated circle's value and displays it. It listens for the 'change' event on specific input elements and updates the corresponding circle's value when the input changes.

`Input Elements` and `Event Listeners`: A series of input elements (`wInput`, `xInput`, etc.) are selected using `document.querySelector`, and event listeners are attached to each input's 'change' event using the `setCircleValue` function. These event listeners update the respective circle's value and update the associated HTML element to display the new value.

`knownVariables` Object: An object that stores initial known values for certain circles ('w', 'x', 'y', etc.).

`sums` Object: Defines groups of cells that need to have specific sums. For example, the 'w' circle should have a sum of values from cells 'a', 'b', 'd', and 'e'. These groupings are used later for verifying the correctness of the solution.

`positionVariables` Object: A placeholder object for storing the values assigned to each cell ('a', 'b', ..., 'i') during the puzzle-solving process.

`sumOptions` Function: Calculates the sum of values for a given array of cell identifiers based on the `positionVariables` object.

`verifySum` and `verifySums` Functions: These functions use `sumOptions` to verify whether a specific group of cells has a sum equal to the expected value. `verifySums` is used to check if all the predefined sums are satisfied.

`verifyPuzzle` Function: Checks if all the sum conditions are satisfied for the current state of the puzzle.

`permutator` Function: Generates all possible permutations of an input array (containing the numbers 1 to 9). It's used to explore different permutations of cell values while solving the puzzle.

`solve` Function: Attempts to solve the puzzle by iterating through all possible permutations of cell values and checking if the sums are satisfied. If a valid solution is found, it updates the `positionVariables` object and the HTML to display the solved values.

In summary, this JavaScript code represents a puzzle-solving interface for a 3x3 grid where cells' values need to be assigned in a way that satisfies predefined sum conditions among specific groups of cells. The user can interact with the interface to input values, associate cells with circles, and attempt to solve the puzzle using the provided solving mechanism.

**Try it out via**
https://suko.calcuis.us
