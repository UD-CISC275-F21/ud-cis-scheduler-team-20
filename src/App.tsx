import React, {useState,useEffect} from "react";
import {AgGridReact} from "ag-grid-react";
import { Alert, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";




// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
       
    ]);
    
    const [show,setshow] = useState(false);
 
    useEffect(()=>{
        console.log("in useeffect",newData);
        setNewData(newData);
    });
    

    function getIndex(abc:typeof newData,params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }){
        for (let i=0;i<abc.length;i++){
            for(let j = 0;j<abc[i].rowData.length;j++){
                if (abc[i].rowData[j]==params.data){
                    return [i,j] ;
                }
            }
        }
    }
    
    const actionButton = (params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; })=>{
        console.log(newData);
        const indexNumber = getIndex(newData,params) as number[] ;
        console.log(indexNumber);
        console.log("before",newData);
        const index1 = indexNumber[0];
        const index = indexNumber[1];
        console.log(index1);
        if (indexNumber != null){
            const newData2 :typeof newData= JSON.parse(JSON.stringify(newData));
            newData2[index1].rowData.splice(index,1);
            try{
                setNewData(newData2);
                console.log("after",newData);
            }catch(e){
                console.log(e);
            }
            const newData3 :typeof newData= JSON.parse(JSON.stringify(newData));
            console.log("data3",newData3);
        }       
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
            headerName:"course",field:"Course",sortable:true,editable:true, rowDrag:true
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
            cellRendererFramework: (params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }) =><div>
                <button onClick={()=>actionButton(params)}>Delete</button>
            </div>,    
        },
    ];

    const clearAllSemester=()=>{
        const newData1 = [{rowData:[]}];
        setNewData(newData1);
    };


    const saveData =() =>{
        const Jsondata = JSON.stringify(newData);
        localStorage.setItem("savedData", Jsondata);
        console.log(localStorage.getItem("savedData"));
    };

    const loadData =() =>{
        const loadData= localStorage.getItem("savedData");
        const JsonData = JSON.parse(loadData||"{}");
        setNewData(JsonData);
        console.log(newData);
    };
    
    const [show1, setShow1] = useState(true);

    return (
        <div >
            <h1 style = {{textAlign:"center"}}>Plan Course Of Semester</h1>
            <button onClick={()=>setshow(true)} style={{marginLeft:350}}>Make a plan</button>
            
            {
                show?
                    newData.map((value,index) => 
                        <div key = {index}>
                            
                            <div className="ag-theme-alpine" style={{height: 400, width: 1000, marginLeft:350}}>
                                
                                <AgGridReact rowData={value.rowData} columnDefs={columns} rowDragManaged={true} animateRows={true}/>
                                
                            </div>
                            
                            <button onClick = {()=>addArow(index)} style={{marginLeft:350}}>AddCourse</button>
                            
                        </div>
    
                        
                    )
            
                    :null

            }
            {
                show?<button onClick={()=>addAsemester()} style={{marginLeft:350}}>Add a Semester</button>:null
            }
            {
                show?<button onClick ={()=>saveData()} style={{marginLeft:350}}>Save</button>:null
            }
            {
                show?<button onClick ={()=>loadData()} style={{marginLeft:350}}>Load</button>:null
            }
            {
                show?<button onClick={()=>clearAllSemester()} style={{marginLeft:350}}>Clear All Semester</button>:null
            }
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
                {!show && <Button onClick={() => setShow1(true)}>Guide</Button>}
            </>
        </div>
    );
};

export default App;