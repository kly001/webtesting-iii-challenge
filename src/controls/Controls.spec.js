// Test away!
import React from "react";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";


import Controls from "./Controls"

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

test("Controls renders without crashing", () => {
    render(<Controls />)
})

// test("provide buttons to toggle state", () => {

// })

// test("button text changes to reflect state", () => {

// })

// test("closed toggle disabled when gate is locked", () => {

// })

// test("locked toggle disabled when gate is open", () => {
    
// })