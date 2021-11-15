import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {Alert, Button, FormControl} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { TypeOfTag } from "typescript";






<<<<<<< HEAD
const App = () => {
    

=======
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

>>>>>>> a0eb8b90761323d2d1d46d19cb81c1e0196c1e99
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
<<<<<<< HEAD
       
    ]);
    const [pair,setPair] = useState([0,1]);
    const [flag,setFlag] = useState(false);
    const [show,setshow] = useState(false);
    const [data,setData] = useState([] );

    useEffect(()=>{
        console.log("in useeffect",newData);
        setNewData(newData);
    });
    
    const [rowDataIndex,setRowDataIndex] = useState(0);
    const [rowIndex,setRowIndex] = useState(0);

    function getIndex(abc:typeof newData,params:any){
        for (let i=0;i<abc.length;i++){
            
            for(let j = 0;j<abc[i].rowData.length;j++){
                if (abc[i].rowData[j]==params.data){
                    return [i,j] ;
                }
            }
        }
    }
    
    
    const actionButton = (params:any)=>{
        
        
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
        
       
=======
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
>>>>>>> a0eb8b90761323d2d1d46d19cb81c1e0196c1e99
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
<<<<<<< HEAD
        
=======
>>>>>>> a0eb8b90761323d2d1d46d19cb81c1e0196c1e99
        const tmpNewData = JSON.parse(JSON.stringify(newData));
        const newSemester = {rowData:[]};
        tmpNewData.push(newSemester);
        setNewData(tmpNewData);
    };
<<<<<<< HEAD
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

    

    return (
        
        <div >
            <h1 style = {{textAlign:"center"}}>Plan Course Of Semester</h1>
            <button onClick={()=>setshow(true)} style={{marginLeft:350}}>Make a plan</button>
            
            {
                show?
                    newData.map((value,index) => (
                        <div key = {index}>
                            
                            <div className="ag-theme-alpine" style={{height: 400, width: 1000,marginLeft:350}}>
                                
                                <AgGridReact rowData={value.rowData} columnDefs={columns}/>
                                
                            </div>
                            
                            <button onClick = {()=>addArow(index)} style={{marginLeft:350}}>addRow</button>
                            
                        </div>
    
                        
                    ))
            
                    :null

            }
            {
                show?<button onClick={()=>addAsemester()} style={{marginLeft:350}}>Add a Semester</button>:null
            }
            {
                show?<button onClick ={()=>saveData()} style={{marginLeft:350}}>save</button>:null
            }
            {
                show?<button onClick ={()=>loadData()} style={{marginLeft:350}}>load data</button>:null
            }
            {
                show?<button onClick={()=>clearAllSemester()} style={{marginLeft:350}}>Clear All Semester</button>:null
            }
=======



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
                        If it is different from the actual situation, you need to edit it manually. This site currently offers adding course semester and deletion functionality.
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
>>>>>>> a0eb8b90761323d2d1d46d19cb81c1e0196c1e99
        </div>
    );
};

export default App;