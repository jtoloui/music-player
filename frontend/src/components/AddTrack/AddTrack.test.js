import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTrack from "./AddTrack";

const onClick = jest.fn();
describe("AddTrack", () => {
	it("Has correct label", () => {
		const { container } = render(<AddTrack />);
		const label = container.querySelector("label");
		expect(label.innerHTML).toBe("Add a song");
	});

	it("Handles onClick", () => {
		const { container } = render(<AddTrack onClick={onClick} />);
		const button = container.querySelector("button");
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});

	it("has one svg", () => {
		const { container } = render(<AddTrack />);
		const svg = container.querySelector("svg");
		expect(svg).toBeInTheDocument();
	});
});
