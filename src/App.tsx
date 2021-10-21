import React from "react";
import {AgGridColumn, AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
    const rowData = [
        {Course: "EGGG101", Credit: "2"},
        {Course: "CISC108", Credit: "3"},
        {Course: "MATH241", Credit: "4"},
        {Course: "ENGL101", Credit: "3"},
        {Course: "BRE", Credit: "3"},
    ];

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 400}}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default App;