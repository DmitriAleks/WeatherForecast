import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {Day} from "./Day";

let container: any = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
it("correct render props for Day Component", () => {
    act(() => {
        render(<Day date={new Date()} maxt={2} mint={1}/>, container);
    });
    expect(container.textContent).toBe("08 макс. темп.2мин. темп.1");

});