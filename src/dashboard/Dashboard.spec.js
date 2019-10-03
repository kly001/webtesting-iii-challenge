// Test away
import React from "react";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";


test("Dashboard renders without crashing", () => {
    render(<Dashboard />)
})


test(" shows controls and display", () => {
    const {getByText} = render(<Dashboard />)
    getByText(/Open/)
    getByText(/Unlocked/)
    getByText(/Lock Gate/)
    getByText(/Close Gate/)
})