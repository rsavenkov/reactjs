import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from "./Hello";
import pretty from "pretty";

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

it("should render a greeting", () => {
    act(() => {
        render(<Hello />, container);
    });

    /*expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();*/

    act(() => {
        render(<Hello name="Jenny" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();

    act(() => {
        render(<Hello name="Margaret" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();
});
