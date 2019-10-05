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

test("should default to unlocked and open", () => {
    const {getByText} = render(<Display />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);

    expect(unlocked).toHaveClass("green-led")
    expect(open).toHaveClass("green-led")
 })
test("when `locked` or `closed` use the `red-led` class", () => {
    const {getByText} = render(<Display closed={true} locked={true}/>);
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i)

    expect(closed).toHaveClass("red-led")
    expect(locked).toHaveClass("red-led")
})
test("when `unlocked` or `open` use the `green-led` class", () => {
    const {getByText} = render(<Display closed={false} locked={false}/>);
    const open = getByText(/open/i);
    const unlocked = getByText(/unlocked/i)

    expect(open).toHaveClass("green-led")
    expect(unlocked).toHaveClass("green-led")
})