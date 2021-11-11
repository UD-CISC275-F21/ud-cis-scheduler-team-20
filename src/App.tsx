import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";



const App = () => {
    
    
    
    

    
    
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
                {id:2,Course: "EGGG103", Credit: "2",Name:"engineer103",Plan:"Take Care"},
                {id:2,Course: "CISC110", Credit: "3",Name:"Computer Science110",Plan:"Take Care"},
                {id:2,Course: "MATH243", Credit: "4",Name:"Mathematic243",Plan:"Take Care"},
                {id:2,Course: "ENGL103", Credit: "3",Name:"engineer103",Plan:"Take Care"},
                {id:2,Course: "BRE2", Credit: "3",Name:"Breath3",Plan:"Take Care"},
            ]
        }
    ]);
    
    
    const [rowDataIndex,setRowDataIndex] = useState(0);
    const [rowIndex,setRowIndex] = useState(0);

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
        // if (semesterid == 0){

        //     const func = (element: unknown) =>{
        //         // console.log(typeof element);
        //         // console.log(element != params.data);
        //         return element != params.data;
        //     };
           
        //     const list = [...newData[0].rowData];
        //     const newlist = list.filter(func);
        //     console.log(newlist);
        //     // const index = newData[0].rowData.indexOf(params.data);
        //     // console.log(index);
            
        //     // newData.splice(0,1);
        //     // const newData1 = newData;
        //     // setNewData(newData);
            
        //     newData.forEach((value,index)=>{
        //         console.log(value);
        //         value.rowData.forEach((value1,index1)=>{
        //             if (value1 == params.data){
        //                 setRowDataIndex(index);
        //                 setRowIndex(index1);
        //             }
        //         });
        //     });
        //     console.log(rowDataIndex);
        //     const newData2 = JSON.parse(JSON.stringify(newData));
        //     const index = newData2;
        //     newData2[0]["rowData"].splice(0,1);
        //     setNewData(newData2);
            
            
            
        
        // }
        
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
    const columns = [
        {
            headerName:"course",field:"Course",sortable:true,editable:true,
        },
        {
            headerName:"credit",field:"Credit",sortable:true,editable:true,
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
        
        <div>
            {
                
                newData.map((value,index) => (
                    <div key = {index}>
                        
                        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
                            
                            <AgGridReact rowData={value.rowData} columnDefs={columns}/>
                            
                        </div>
                        
                        <button onClick = {()=>addArow(index)}>addRow</button>
                    </div>
                ))
                    
                
            }
            <button onClick={()=>setNewData([])}>Clear All Semester</button>
            <button onClick = {() => addAsemester()}>add newSemester</button>
            
           
           
        </div>
    );
};

export default App;