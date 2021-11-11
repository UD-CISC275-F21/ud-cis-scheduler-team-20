import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {Alert, Button, FormControl} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
       
    const [rowData,setRowData] = useState([
        {id:0,Course: "EGGG101", Credit: "2",Name:"engineer101",Plan:"Take Care"},
        {id:0,Course: "CISC108", Credit: "3",Name:"Computer Science108",Plan:"Take Care"},
        {id:0,Course: "MATH241", Credit: "4",Name:"Mathematic241",Plan:"Take Care"},
        {id:0,Course: "ENGL101", Credit: "3",Name:"engineer101",Plan:"Take Care"},
        {id:0,Course: "BRE", Credit: "3",Name:"Breath",Plan:"Take Care"},
    ]);
    const [rowData1,setRowData1] = useState([
        {id:1,Course: "EGGG102", Credit: "2",Name:"engineer102",Plan:"Take Care"},
        {id:1,Course: "CISC109", Credit: "3",Name:"Computer Science109",Plan:"Take Care"},
        {id:1,Course: "MATH242", Credit: "4",Name:"Mathematic242",Plan:"Take Care"},
        {id:1,Course: "ENGL102", Credit: "3",Name:"engineer102",Plan:"Take Care"},
        {id:1,Course: "BRE1", Credit: "3",Name:"Breath2",Plan:"Take Care"},
    ]);
    const [rowData2,setRowData2] = useState([
        {id:2,Course: "EGGG103", Credit: "2",Name:"engineer103",Plan:"Take Care"},
        {id:2,Course: "CISC110", Credit: "3",Name:"Computer Science110",Plan:"Take Care"},
        {id:2,Course: "MATH243", Credit: "4",Name:"Mathematic243",Plan:"Take Care"},
        {id:2,Course: "ENGL103", Credit: "3",Name:"engineer103",Plan:"Take Care"},
        {id:2,Course: "BRE2", Credit: "3",Name:"Breath3",Plan:"Take Care"},
    ]);
    
    const columns = [
        {
            headerName:"course",field:"Course",sortable:true,
        },
        {
            headerName:"credit",field:"Credit",sortable:true,
        },
        {
            headerName:"name",field:"Name",sortable:true,editable:true,
        },
        {
            headerName:"plan",field:"Plan",sortable:true,editable:true,
        },
        {
            headerName:"degree requirement",
            field:"DR",
            cellRendererFramework: (params: { data: { [x: string]: unknown; id?: number | undefined; Course?: string | undefined; Credit?: string | undefined; Name?: string | undefined; Plan?: string | undefined; Course2?: string | undefined; }; }) =>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                    <button onClick={()=>actionButton(params)}>Delete</button>
                </div>,
        },
        {
            headerName:"action",
            field:"Action",
            cellRendererFramework: (params: { data: { [x: string]: unknown; id?: number | undefined; Course?: string | undefined; Credit?: string | undefined; Name?: string | undefined; Plan?: string | undefined; Course2?: string | undefined; }; }) =>
                <div>
                    <button onClick={()=>actionButton(params)}>Delete</button>
                </div>,
        },
    ];

    const [show,setshow] = useState(true);
    
    const [show1, setShow1] = useState(true);

    const actionButton = (params: { data: { [x: string]: unknown; id?: number; Course?: string; Credit?: string; Name?: string; Plan?: string; Course2?: string; }; })=>{
        const semesterid = params.data["id"];
        if (semesterid == 0){
            setRowData((prevData)=>{
                return prevData.filter(param => param != params.data );
            });
        }
        if (semesterid == 1){
            setRowData1((prevData)=>{
                return prevData.filter(param => param != params.data );
            });
        }
        if (semesterid == 2){
            setRowData2((prevData)=>{
                return prevData.filter(param => param != params.data );
            });
        }
    };

    return (
        <div className="container">
            <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
                <button onClick={()=>setshow(false)}>Clear All Semester</button> <button onClick={()=>setshow(true)}>Show All Semester</button>
                {
                    show?
                        <AgGridReact
                            rowData={rowData} columnDefs={columns} />
                        :null
                }
                {
                    show?
                   
                        <AgGridReact
                            rowData={rowData1} columnDefs={columns}/>
                        :null
                }
                {
                    show?
                        <AgGridReact
                            rowData={rowData2} columnDefs={columns}/>
                        :null
                }   
            </div>
            <>
                <Alert show={show1} variant="success">
                    <Alert.Heading>Hello There!</Alert.Heading>
                    <p>
                        Thank you for using our website. The current version is the default semester plan, and you can graduate in 4 academic years if things go well. 
                        If it is different from the actual situation, you need to edit it manually. The site currently offers deletion functionality.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow1(false)} variant="outline-success">
                            Got!
                        </Button>
                    </div>
                </Alert>
                {!show && <Button onClick={() => setShow1(true)}>Show Alert</Button>}
            </>
        </div>
    );
};

export default App;

