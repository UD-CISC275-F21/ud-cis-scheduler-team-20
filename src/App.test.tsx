import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("is there any semester", () => {
    render(<App />);
    const Semester = screen.getByText(/semester/i);
    expect(Semester).toBeInTheDocument();
});
