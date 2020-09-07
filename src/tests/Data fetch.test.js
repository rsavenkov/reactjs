import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import {CountryList} from "../Lesson5";
import { act } from "react-dom/test-utils";


let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test('data fetch test', async () => {
    const countryList = [
        {
            "name": "Russian Federation",
            "alpha2Code": "RU"
        },
        {
            "name": "Ukraine",
            "alpha2Code": "UA"
        },
        {
            "name": "Belarus",
            "alpha2Code": "BY"
        }
    ];
    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(countryList)
        })
    })

    await act(async () => {
        render(<CountryList/>, container);
    });

    expect(container.querySelector("select").length).toBe(3);

    global.fetch.mockRestore();
});
