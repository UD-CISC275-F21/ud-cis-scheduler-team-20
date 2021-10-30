import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("AgGridReact", () => {
    render(<App />);
    const linkElement = screen.getByText(/AgGridReact/i);
    expect(linkElement).toBeInTheDocument();
});
