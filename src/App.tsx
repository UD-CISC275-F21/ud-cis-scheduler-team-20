import React, {useState,useEffect} from "react";
import {AgGridReact} from "ag-grid-react";
import { Alert, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import FileSaver from "file-saver";
import Papa from "papaparse";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {

    const [newData,setNewData] = useState([
        {
            "rowData":[
                {id:0,Course: "EGGG101", Credit: "2",Name:"engineer101",Plan:"Take Care",DegreeRequire:"Other",Presuit:"UNIV"},
                {id:1,Course: "CISC108", Credit: "3",Name:"Computer Science108",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC100"},
                {id:2,Course: "MATH241", Credit: "4",Name:"Mathematic241",Plan:"Take Care",DegreeRequire:"Other",Presuit:"LAB"},
                {id:3,Course: "ENGL101", Credit: "3",Name:"engineer101",Plan:"Take Care",DegreeRequire:"Other",Presuit:"UNIV"},
                {id:4,Course: "BRE", Credit: "3",Name:"Breath",Plan:"Take Care",DegreeRequire:"Other",Presuit:"BRE"},
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
            field: "DegreeRequire",
            editable:true,
            cellEditor: "agRichSelectCellEditor",
            cellEditorParams: {
                values: ["CISC", "Other"],
            },
        },
        {
            field: "Presuit",
            editable:true,
            cellEditor: "agRichSelectCellEditor",
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

    const clearAllCourse = (index:number)=>{
        const tmpNewData = JSON.parse(JSON.stringify(newData));
        tmpNewData[index].rowData = [];
        setNewData(tmpNewData);
    };
    
    const [show1, setShow1] = useState(true);

    const exportData = (index:number)=>{
        const nowData = newData[index].rowData;
        let str = "";
        str += "id"+ "," + "Course" + "," + "Credit" + "," +  "Name" + "," + "Plan" + "," + "DegreeRequire" + "," + "Presuit";
        for(let i = 0; i < nowData.length; i++){
            str += "\n" + 
                    nowData[i].id + "," +
                    nowData[i].Course + "," +
                    nowData[i].Credit + "," +
                    nowData[i].Name + "," +
                    nowData[i].Plan + "," +
                    nowData[i].DegreeRequire + "," +
                    nowData[i].Presuit;
        }
        const blob = new Blob([str], {
            type: "text/plain;charset=utf-8"
        });
        FileSaver.saveAs(blob, "data.csv");
    };
    const importData = (e: any) => {
        const file = e.target.files[0];
        e.target.value = "";
        if (file) {
            const fr = new FileReader();
            fr.readAsBinaryString(file);
            fr.onload = (e: any) => {
                const result = e.target.result;
                // iconv.skipDecodeWarning = true;
                // const text = iconv.decode(result, "UTF8");
                Papa.parse(result, {
                    encoding: "UTF-8",
                    complete: (rs: any) => {
                        // console.log(rs);
                        const arr = newData;
                        const rowData = [];
                        for(let i = 1 ; i < rs.data.length ; i++) {
                            const data2 = rs.data[i];
                            const obj2 = {
                                id: data2[0],
                                Course: data2[1],
                                Credit: data2[2],
                                Name: data2[3],
                                Plan: data2[4],
                                DegreeRequire: data2[5],
                                Presuit: data2[6]
                            };
                            rowData.push(obj2);
                            
                        }
                        // console.log(rowData, 999);
                        arr.push({
                            rowData
                        });
                        setNewData(JSON.parse(JSON.stringify(arr)));
                    }
                });
            };
        }
    };
    let nowDragData:any = null;
    let DropObjIndex:any = -1;
    let flag = false;
    const DragStopped = (e: any) => {
        nowDragData = e.target.__agComponent.rowNode.data;
        // console.log(e, DropObjIndex);
        flag = true;
    };
    const onMousemove = (e: any) => {
        DropObjIndex = e.target.closest("div.ag-theme-alpine").dataset.key;
        // console.log(nowDragData, DropObjIndex, flag);
        if(flag && DropObjIndex!=-1 && nowDragData){
            const arr = JSON.parse(JSON.stringify(newData));
            if(arr[DropObjIndex]) {
                // console.log(arr, arr[DropObjIndex], 3333);
                arr[DropObjIndex].rowData.push(JSON.parse(JSON.stringify(nowDragData)));
            }
            setNewData(arr);
            DropObjIndex = -1;
        }
        flag = false;
    };
    return (
        <div className="app-box" >
            <h1 style = {{textAlign:"center"}}>Plan Course Of Semester</h1>
            <button onClick={()=>setshow(true)} style={{marginLeft:350}}>Make a plan</button>
            
            {
                show?
                    newData.map((value,index) => 
                        <div key = {index}>
                            
                            <div onMouseMove={onMousemove} className="ag-theme-alpine" data-key={index} style={{height: 400, width: 1000, marginLeft:350}}>
                                
                                <AgGridReact  onDragStopped={DragStopped}  rowData={value.rowData} columnDefs={columns} rowDragManaged={true} animateRows={true} suppressMoveWhenRowDragging={true} />
                                
                            </div>
                            
                            <button onClick = {()=>addArow(index)} style={{marginLeft:350}}>AddCourse</button>
                            <button onClick={()=>clearAllCourse(index)}>clear All Course</button>
                            <button onClick={()=>exportData(index)} style={{marginLeft:350}}>export</button>
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
            {
                show?<button className="file" style={{marginLeft:350}}><input type="file" accept=".csv" onChange={importData} />import</button>: null
            }
            <>
                <Alert show={show1} variant="success">
                    <Alert.Heading>Hello There!</Alert.Heading>
                    <p>
                        Thank you for using our website. The current version is the default semester plan, and you can graduate in 4 academic years if things go well. 
                        If it is different from the actual situation, you need to edit it manually. This site currently offers adding course semesters and deletion functionality.
                        And you can drag courses in the same table. You can clear all semester and courses.
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



