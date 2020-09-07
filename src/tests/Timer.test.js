import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "./Card";

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

it("should select null after timing out", () => {
    jest.useFakeTimers();
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    // двигаемся вперёд во времени на 100 мс
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // теперь двигаемся вперёд ещё на 5 секунд
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith(null);
});
