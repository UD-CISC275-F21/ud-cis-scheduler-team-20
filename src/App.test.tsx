<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    // Arrange: prepare the environment, 
    //         render the component.
    render(<App />);
    
    // Act: try to find the expected link.
    const linkElement = screen.getByText(/learn react/i);
    
    // Assert: check that required link 
    //        is indeed in the document.
    expect(linkElement).toBeInTheDocument();
});
=======
import React from 'react'
import {render} from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>
const {debug} = render(<HelloWorld />)
debug()


>>>>>>> aac687259adddb87c2949f197fdb7e20caba98d0
