import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";




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
        {id:2,Course2: "EGGG103", Credit: "2",Name:"engineer103",Plan:"Take Care"},
        {id:2,Course2: "CISC110", Credit: "3",Name:"Computer Science110",Plan:"Take Care"},
        {id:2,Course2: "MATH243", Credit: "4",Name:"Mathematic243",Plan:"Take Care"},
        {id:2,Course2: "ENGL103", Credit: "3",Name:"engineer103",Plan:"Take Care"},
        {id:2,Course2: "BRE2", Credit: "3",Name:"Breath3",Plan:"Take Care"},
    ]);
    const [show,setshow] = useState(true);

    const actionButton = (params:any)=>{
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
            headerName:"action",
            field:"Action",
            cellRendererFramework: (params:any) =><div>
                <button onClick={()=>actionButton(params)}>Delete</button>
            </div>,
            
        },
    ];

    return (
        
        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
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
    );
};

export default App;