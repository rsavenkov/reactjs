import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Greeting } from '../Lesson3'

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders test', () => {
    act(() => {
        render(<Greeting isLoggedIn={true} />, container);
    });
    expect(container.textContent).toBe("Wellcome again!");

    act(() => {
        render(<Greeting isLoggedIn={false} />, container);
    });
    expect(container.textContent).toBe("Log in, please.");
})
