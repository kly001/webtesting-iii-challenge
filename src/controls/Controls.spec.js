// Test away!
import React from "react";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";


import Controls from "./Controls"

test("Controls renders without crashing", () => {
    render(<Controls />)
})