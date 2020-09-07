import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Contact from "./Contact";

jest.mock("./map", () => {
    return function DummyMap(props) {
        return (
            <div data-testid="map">
                {props.center.lat}:{props.center.long}
            </div>
        );
    };
});

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

it("mocking module test", () => {
    const center = { lat: 1, long: 2 };
    act(() => {
        render(
            <Contact name="Joni Baez" email="test@example.com"
                     site="http://test.com" center={center}/>,
            container
        );
    });

    expect(
        container.querySelector("[data-testid='email']").getAttribute("href")
    ).toEqual("mailto:test@example.com");

    expect(
        container.querySelector('[data-testid="site"]').getAttribute("href")
    ).toEqual("http://test.com");

    expect(container.querySelector('[data-testid="map"]').textContent).toEqual(
        "0:0"
    );
});

