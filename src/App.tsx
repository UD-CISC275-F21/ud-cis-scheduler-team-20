import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {Alert, Button, FormControl} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {   
    

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

    const [newData,setNewData] = useState([
        {
            "rowData":[
                {id:0,Course: "EGGG101", Credit: "2",Name:"engineer101",Plan:"Take Care"},
                {id:0,Course: "CISC108", Credit: "3",Name:"Computer Science108",Plan:"Take Care"},
                {id:0,Course: "MATH241", Credit: "4",Name:"Mathematic241",Plan:"Take Care"},
                {id:0,Course: "ENGL101", Credit: "3",Name:"engineer101",Plan:"Take Care"},
                {id:0,Course: "BRE", Credit: "3",Name:"Breath",Plan:"Take Care"},
            ], 
        },
        {
            "rowData":[
                {id:1,Course: "EGGG102", Credit: "2",Name:"engineer102",Plan:"Take Care"},
                {id:1,Course: "CISC109", Credit: "3",Name:"Computer Science109",Plan:"Take Care"},
                {id:1,Course: "MATH242", Credit: "4",Name:"Mathematic242",Plan:"Take Care"},
                {id:1,Course: "ENGL102", Credit: "3",Name:"engineer102",Plan:"Take Care"},
                {id:1,Course: "BRE1", Credit: "3",Name:"Breath2",Plan:"Take Care"},
            ]
        }
    ]);

    const [rowDataIndex,setRowDataIndex] = useState(0);
    const [rowIndex,setRowIndex] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actionButton = (params:any)=>{
        console.log(params.data);
        newData.forEach((value,index)=>{
            console.log(value);
            value.rowData.forEach((value1,index1)=>{
                if (value1 == params.data){
                    const newIndex = JSON.parse(JSON.stringify(index));
                    const newIndex1 = JSON.parse(JSON.stringify(index1));
                    setRowDataIndex(newIndex);
                    setRowIndex(newIndex1);
                }
            });
        });
        const newData2 = JSON.parse(JSON.stringify(newData));
        
        newData2[rowDataIndex]["rowData"].splice(rowIndex,1);
        setNewData(newData2);
        console.log(rowDataIndex);
        console.log(rowIndex);
    };

    const addArow = (index: number) => {
        const newCourse = {id:index,Course: "", Credit: "",Name:"",Plan:""};
        console.log(newCourse);
        const tmpNewData = JSON.parse(JSON.stringify(newData));
        tmpNewData[index].rowData.push(newCourse);
        console.log(tmpNewData[index]);
        setNewData(tmpNewData);
        
    };

    const addAsemester = () =>{
        const tmpNewData = JSON.parse(JSON.stringify(newData));
        const newSemester = {rowData:[]};
        tmpNewData.push(newSemester);
        setNewData(tmpNewData);
    };



    return (
        <div className="container">
            <div>
                <button onClick={()=>setshow(false)}>Clear All Semester</button> <button onClick={()=>setshow(true)}>Show All Semester</button>
                <button onClick = {() => addAsemester()}>add newSemester</button>
                {
                    show?
                        newData.map((value,index) => 
                            <div key = {index}>
                             
                                <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
                                 
                                    <AgGridReact rowData={value.rowData} columnDefs={columns}/>
                                 
                                </div>
                             
                                <button onClick = {()=>addArow(index)}>addRow</button>
                            </div>
                        )
                        :null
                
                }
            </div>
            <>
                <Alert show={show1} variant="success">
                    <Alert.Heading>Hello There!</Alert.Heading>
                    <p>
                        Thank you for using our website. The current version is the default semester plan, and you can graduate in 4 academic years if things go well. 
                        If it is different from the actual situation, you need to edit it manually. This site currently offers adding course semesters and deletion functionality.
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