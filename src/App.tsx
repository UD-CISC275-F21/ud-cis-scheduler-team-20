import React from "react";
import {AgGridColumn, AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
    const S1Data = [
        {Smester:"1", Course: "EGGG101", Description: "Introduction to Engineering (FYE)", Credit: "2", Grade: "standard", status: "finished"},
        {Smester:"1", Course: "CISC108", Description: "Introduction to Computer Science", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"1", Course: "MATH241", Description: "Analytic Geometry & Calculus A", Credit: "4", Grade: "standard", status: "finished"},
        {Smester:"1", Course: "ENGL101", Description: "Seminar in Composition", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"1", Course: "BRE 1", Description: "Breadth Requirement Elective 1", Credit: "3", Grade: "standard", status: "finished"},
    ];

    const S2Data = [
        {Smester:"2", Course: "CISC181", Description: "Introduction to Computer Science II", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"2", Course: "MATH242", Description: "Analytic Geometry & Calculus B", Credit: "4", Grade: "standard", status: "finished"},
        {Smester:"2", Course: "CISC210", Description: "Introduction to Systems Programming", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"2", Course: "LAB Science 1", Description: "Laboratory Science I", Credit: "4", Grade: "standard", status: "finished"},
        {Smester:"2", Course: "BRE 2", Description: "Breadth Requirement Elective 2", Credit: "3", Grade: "standard", status: "finished"},
    ];

    const S3Data = [
        {Smester:"3", Course: "CISC220", Description: "Data Structures", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"3", Course: "CISC260", Description: "Machine Org. & Assembly Language", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"3", Course: "MATH210", Description: "Discrete Mathematics I", Credit: "3", Grade: "pass and fail", status: "finished"},
        {Smester:"3", Course: "LAB Science 2", Description: "Laboratory Science 2", Credit: "4", Grade: "standard", status: "finished"},
        {Smester:"3", Course: "BRE 3", Description: "Breadth Requirement Elective 3", Credit: "3", Grade: "standard", status: "finished"},
    ];

    const S4Data = [
        {Smester:"4", Course: "CISC355", Description: "Computers, Ethics & Society", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "CISC275", Description: "Introduction to Software Engineering", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "MATH205/350", Description: "Statistical Method/Probability Theory and Simulation Methods", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "LAB Science 3", Description: "Laboratory Science 3", Credit: "4", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "BRE 4", Description: "Breadth Requirement Elective 4", Credit: "3", Grade: "standard", status: "finished"},
    ];

    const S5Data = [
        {Smester:"4", Course: "CISC320", Description: "Introduction to Algorithms", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "CISC361", Description: "Operating Systems", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "CISC304", Description: "Logic and Programming", Credit: "3", Grade: "standard", status: "finished"},
        {Smester:"4", Course: "CE1", Description: "Concentration Elective 1", Credit: "3", Grade: "standard", status: "unpassed"},
        {Smester:"4", Course: "GE1", Description: "General Elective 1", Credit: "3", Grade: "standard", status: "finished"},
    ];
    
    const defaultColDef = {
        // set every column width
        width: 300,
        // make every column editable
        editable: true,
        // make every column use 'text' filter by default
        filter: "agTextColumnFilter",
    };

    const defaultColGroupDef = {};

    const columnTypes = {
        nonEditableColumn: { editable: false },
        dateColumn: {
            filter: "agDateColumnFilter",
            filterParams: { comparator: S1Data,S2Data,S3Data,S4Data,S5Data },
            suppressMenu: true
        }
    };

    return (
        <div className="ag-theme-alpine" style={{height: 300, width: 1800}}>
            <AgGridReact
                rowData={S1Data} defaultColDef={defaultColDef} defaultColGroupDef={defaultColGroupDef} columnTypes={columnTypes}>
                <AgGridColumn field="Smester"></AgGridColumn>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn> 
                <AgGridColumn field="Grade"></AgGridColumn>
                <AgGridColumn field="status"></AgGridColumn>
            </AgGridReact>
            <AgGridReact
                rowData={S2Data} defaultColDef={defaultColDef} defaultColGroupDef={defaultColGroupDef} columnTypes={columnTypes}>
                <AgGridColumn field="Smester"></AgGridColumn>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn>
                <AgGridColumn field="Grade"></AgGridColumn> 
                <AgGridColumn field="status"></AgGridColumn> 
            </AgGridReact>
            <AgGridReact
                rowData={S3Data} defaultColDef={defaultColDef} defaultColGroupDef={defaultColGroupDef} columnTypes={columnTypes}>
                <AgGridColumn field="Smester"></AgGridColumn>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn>
                <AgGridColumn field="Grade"></AgGridColumn> 
                <AgGridColumn field="status"></AgGridColumn> 
            </AgGridReact>
            <AgGridReact
                rowData={S4Data} defaultColDef={defaultColDef} defaultColGroupDef={defaultColGroupDef} columnTypes={columnTypes}>
                <AgGridColumn field="Smester"></AgGridColumn>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn> 
                <AgGridColumn field="Grade"></AgGridColumn> 
                <AgGridColumn field="status"></AgGridColumn>
            </AgGridReact>
            <AgGridReact
                rowData={S5Data} defaultColDef={defaultColDef} defaultColGroupDef={defaultColGroupDef} columnTypes={columnTypes}>
                <AgGridColumn field="Smester"></AgGridColumn>
                <AgGridColumn field="Course"></AgGridColumn>
                <AgGridColumn field="Description"></AgGridColumn>
                <AgGridColumn field="Credit"></AgGridColumn> 
                <AgGridColumn field="Grade"></AgGridColumn> 
                <AgGridColumn field="status"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};


export default App;