// Test away
import React from "react";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";


// ### Dashboard

// - shows the controls and display

test("should match snapshot", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test("Dashboard renders without crashing", () => {
    render(<Dashboard />)
})


test(" shows controls and display", () => {
    const {getByText} = render(<Dashboard />)
    getByText(/open/i)
    getByText(/unlocked/i)
    getByText(/lock gate/i)
    getByText(/close gate/i)
})

