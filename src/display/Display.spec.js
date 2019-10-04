// Test away!
import React from "react";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Display from "./Display";

// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

test("display renders without crashing", () => {
    render(<Display />)
})

test("display gate open/closed and locked/unlocked", () => {

})
test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {

})
test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {

})
test("when `locked` or `closed` use the `red-led` class", () => {

})
test("when `unlocked` or `open` use the `green-led` class", () => {
    
})