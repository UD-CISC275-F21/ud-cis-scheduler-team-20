import React, { useState, useEffect, ChangeEvent } from "react";
// import type { MouseEvent } from "react";
import "ag-grid-enterprise";
import {AgGridReact} from "ag-grid-react";
import {GridReadyEvent, GridApi, DragStartedEvent} from "ag-grid-community";
import { Alert, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// import FileSaver from "file-saver";
import Papa from "papaparse";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {

    const [courses, setCourses] = useState([
        {
            "rowData":[
                {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
                {id:1,Course: "CISC 210", Credit: "3",Name:"Introduction to Computer Science 2",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 108"},
                {id:2,Course: "CISC 220", Credit: "3",Name:"Data Sctructures",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 210"},
                {id:3,Course: "CISC 260", Credit: "3",Name:"Machine organization and Assembly Language",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 220"},
                {id:4,Course: "CISC 275", Credit: "3",Name:"Introduction to Software Engineering",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 260"},
                {id:5,Course: "CISC 303", Credit: "3",Name:"Automata Theory",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 275"},
                {id:6,Course: "CISC 320", Credit: "3",Name:"Introduction to Algorithms",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 303"},
                {id:7,Course: "CISC 361", Credit: "3",Name:"Operating Systems",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 320"},
                {id:8,Course: "CISC 372", Credit: "3",Name:"Parallel Computing",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 361"},
                {id:9,Course: "CISC 475", Credit: "3",Name:"Advanced Software Engineering",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 372"},
                {id:10,Course: "MATH 205", Credit: "4",Name:"Statistical Mathods",Plan:"Take Care",DegreeRequire:"Other",Presuit:""},
                {id:11,Course: "MATH 210", Credit: "3",Name:"Discrete Mathematics 1",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 205"},
                {id:12,Course: "MATH 350", Credit: "3",Name:"Probability Theory and Simulation Methods",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 210"},
                {id:13,Course: "MATH 241", Credit: "4",Name:"Analytic Geometry and Calculus A",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 350"},
                {id:14,Course: "MATH 242", Credit: "4",Name:"Analytic Geometry and Calculus B",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 241"},


            ], 
        }
       
    ]);
    
    const [DegreeRequires,setDegreeRequires] = useState([{
        name: "CISC",
        value: 10,
        nowValue: 1
    },{
        name: "Other",
        value: 5,
        nowValue: 0
    }]);
    
    const [newDataType] = useState([{
        "rowData":[
            {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
        ], 
    }]);
    
    const [newData,setNewData] = useState([
        {
            "rowData":[
                {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
                // {id:0,Course: "EGGG101", Credit: "2",Name:"engineer101",Plan:"Take Care",DegreeRequire:"Other",Presuit:"UNIV"},
                // {id:1,Course: "CISC108", Credit: "3",Name:"Computer Science108",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC100"},
                // {id:2,Course: "MATH241", Credit: "4",Name:"Mathematic241",Plan:"Take Care",DegreeRequire:"Other",Presuit:"LAB"},
                // {id:3,Course: "ENGL101", Credit: "3",Name:"engineer101",Plan:"Take Care",DegreeRequire:"Other",Presuit:"UNIV"},
                // {id:4,Course: "BRE", Credit: "3",Name:"Breath",Plan:"Take Care",DegreeRequire:"Other",Presuit:"BRE"},
            ], 
        },
       
    ]);
    const [totalCredit, setTotalCredit] = useState(3);
    
    const [show,setshow] = useState(false);
 
    useEffect(()=>{
        // console.log("in useeffect",newData);
        setNewData(newData);
        document.body.addEventListener("mouseup", function(e){
            // console.log(e, flag, 11);
            if(!flag) return;
            if(e.target) {
                const target: HTMLDivElement= e.target as HTMLDivElement;
                const parentDiv = target.className.indexOf("my-table") != -1 ? target : target.closest("div.my-table") as HTMLDivElement;
                const key = parentDiv ? parentDiv.dataset.key : "";
                // console.log(key, "key", parentDiv);
                DropObjIndex = key!=="" && key !== null ? key as never : -1;
                // console.log(flag, key, "key", DropObjIndex, nowDragData);
                if(flag && DropObjIndex!=-1 && nowDragData && nowDragData.id!==""&& nowDragData.id!==null){
                    flag = false;
                    if(DropObjIndex==-2) {
                        const arr = JSON.parse(JSON.stringify(courses));
                        // arr[0].rowData.push(JSON.parse(JSON.stringify(nowDragData)));
                        // setCourses(arr);

                        const parseData = JSON.parse(JSON.stringify(nowDragData));
                        // let flag2 = false;
                        if(!parseData.Course) {
                            alert("Course cannot null");
                            DropObjIndex = -1;
                            nowDragData = {} as Element;
                            return;
                        }

                        for(let i = 0; i< arr[0].rowData.length ;i++) {
                            const item = arr[0].rowData[i];
                            // console.log(item.Course == parseData.Course, item.Course , parseData.Course);
                            if(item.Course == parseData.Course) {
                                alert("The course already exists");
                                DropObjIndex = -1;
                                nowDragData = {} as Element;
                                return;
                            }
                            // if(parseData.Presuit && item.Course == parseData.Presuit) {
                            //     // console.log(parseData.Presuit, 888);
                            //     flag2 = true;
                            // }
                        }
                        arr[0].rowData.push(JSON.parse(JSON.stringify(nowDragData)));
                        setCourses(arr);
                        // if(!parseData.Presuit || flag2) {
                        //     arr[0].rowData.push(JSON.parse(JSON.stringify(nowDragData)));
                        // }else {
                        //     alert("Did not complete the required courses for this class");
                        // }
                    }else{
                        const arr = JSON.parse(JSON.stringify(newData));
                        // console.log(DropObjIndex, arr[DropObjIndex], 888);
                        if(arr[DropObjIndex]) {
                            const parseData = JSON.parse(JSON.stringify(nowDragData));
                            let flag2 = false;
                            for(let j = 0; j< arr.length; j++) {
                                for(let i = 0; i< arr[j].rowData.length ;i++) {
                                    const item = JSON.parse(JSON.stringify(arr[j].rowData[i]));
                                    if(parseData.Course && item.Course == parseData.Course) {
                                        alert("The course already exists");
                                        DropObjIndex = -1;
                                        nowDragData = {} as Element;
                                        return;
                                    }
                                    if(parseData.Presuit && item.Course == parseData.Presuit) {
                                        flag2 = true;
                                    }
                                }
                            }
                            if(!parseData.Presuit || flag2) {
                                arr[DropObjIndex].rowData.push(parseData);
                                setNewData(arr);
                                const totalCredit2 = totalCredit + parseData.Credit * 1;
                                // console.log(totalCredit, parseData, 888);
                                setTotalCredit(totalCredit2);
                                const DegreeRequires2 = JSON.parse(JSON.stringify(DegreeRequires));
                                // console.log(DegreeRequires2, parseData.DegreeRequire, parseData);
                                for(let j = 0 ; j < DegreeRequires2.length ; j++) {
                                    // console.log(parseData.DegreeRequire === DegreeRequires2[j].name, parseData.DegreeRequire , DegreeRequires2[j].name);
                                    if(parseData.DegreeRequire === DegreeRequires2[j].name){
                                        DegreeRequires2[j].nowValue = DegreeRequires2[j].nowValue + 1;
                                        break;
                                    }
                                }
                                // console.log(DegreeRequires2, 889);
                                setDegreeRequires(DegreeRequires2);
                                // console.log(arr[DropObjIndex], DropObjIndex, parseData);
                            }else {
                                alert("Did not complete the required courses for this class");
                            }
                        }
                        // setNewData(JSON.parse(JSON.stringify(arr)));
                        // console.log(newData, arr, 9990);
                    }
                    DropObjIndex = -1;
                    nowDragData = {} as Element;
                }
            }
        });
    });
    

    function getIndex(abc:typeof newDataType,params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }){
        for (let i=0;i<abc.length;i++){
            for(let j = 0;j<abc[i].rowData.length;j++){
                if (abc[i].rowData[j].id==params.data.id){
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
            const newData2 :typeof newDataType= JSON.parse(JSON.stringify(newData));
            newData2[index1].rowData.splice(index,1);
            try{
                setNewData(newData2);
                console.log("after",newData);
            }catch(e){
                console.log(e);
            }
            const newData3 :typeof newDataType= JSON.parse(JSON.stringify(newData));
            console.log("data3",newData3);
        }       
    };

    const addArow = (index: number) => {
        const newCourse = {id:courses.length,Course: "", Credit: "",Name:"",Plan:""};
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
    
    const columns2 = [
        {
            headerName:"",field:"",sortable:true,editable:true, rowDrag:true, width: 40
        },
        {
            headerName:"pool of courses",
            field:"pool of courses",
            width: 300,
            cellRendererFramework: (params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }) =><div>
                {params.data.Course}-{params.data.Name}({params.data.Credit}cr)
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
        // console.log(newData);
    };

    const clearAllCourse = (index:number)=>{
        const tmpNewData = JSON.parse(JSON.stringify(newData));
        tmpNewData[index].rowData = [];
        setNewData(tmpNewData);
    };
    
    const [show1, setShow1] = useState(true);
    
    const importData = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files);
        if(e.target.files) {
            const file = e.target.files[0];
            e.target.value = "";
            if (file) {
                const fr = new FileReader();
                fr.readAsBinaryString(file);
                fr.onload = (e: ProgressEvent<FileReader>) => {
                    // if(e.target) console.log(e.target["result"]);
                    if(e.target && e.target.result){
                        const result = e.target.result;
                        Papa.parse(result as string, {
                            encoding: "UTF-8",
                            complete: ({data}) => {
                                const arr = newData;
                                const rowData = [];
                                for(let i = 1 ; i < data.length ; i++) {
                                    const data2 = data[i] as never;
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
                                arr.push({
                                    rowData
                                });
                                setNewData(JSON.parse(JSON.stringify(arr)));
                            }
                        });
                    }
                };
            }
        }
    };
    
    let nowDragData:Element;
    let DropObjIndex = -1;
    let flag = false;
    
    const DragStarted = (e: DragStartedEvent) => {
        if(e.target) {
            const target = e.target as never;
            nowDragData = target["__agComponent"]["rowNode"]["data"];
        }
        flag = true;
    };
    
    const [gridApi, setGridApi] = useState([]);
    
    const onGridReady = (params: GridReadyEvent, index: number) => {
        // console.log(params,index, 9999);
        const arr = [...gridApi];
        arr[index] = params.api as never;
        setGridApi(arr);
    };
    
    const onBtnExport = (index: number) => {
        const api = gridApi[index] as GridApi;
        api.exportDataAsCsv();
    };
   
    return (
        <div className="app-box" >
            <h1 style = {{textAlign:"center"}}>Plan Course Of Semester</h1>
            <button onClick={()=>setshow(true)} style={{marginLeft:350}}>Make a plan</button>
            {
                show?
                    <div className="flex">
                        <div>
                            {
                                courses.map((value,index) => 
                                    <div key = {index} className="my-table" data-key={-2}>
                                        
                                        <div  className="ag-theme-alpine"  style={{height: 400, width: 350}}>
                                            {/*<button onClick={() => onBtnExport(index)}>
                                                export pool of courses
                                            </button>*/}
                                            <AgGridReact onDragStarted={DragStarted} suppressExcelExport={true}  onGridReady={(e)=>{
                                                onGridReady(e, index);
                                            }} rowData={value.rowData} columnDefs={columns2} rowDragManaged={true} animateRows={true} suppressMoveWhenRowDragging={true} />
                                            
                                        </div>
                                    </div>
                
                                    
                                )
                            }
                        </div>
                        <div>
                            <div>total credit: {totalCredit}</div>
                            {
                                DegreeRequires.map((item, index) =>
                                    <div key={index}>
                                        <div>{item.name}: {item.nowValue}/{item.value}</div>
                                    </div>
                                )
                            }
                            {
                                newData.map((value,index) => 
                                    <div key = {index} className="my-table" data-key={index}>
                                        
                                        <div  className="ag-theme-alpine"  style={{height: 400, width: 1400, marginLeft:10}}>
                                            <button onClick={() => onBtnExport(index)}>
                                                export CSV file
                                            </button>
                                            <AgGridReact onDragStarted={DragStarted} suppressExcelExport={true} onGridReady={(e)=>{
                                                onGridReady(e, index);
                                            }} rowData={value.rowData} columnDefs={columns} rowDragManaged={true} animateRows={true} suppressMoveWhenRowDragging={true} />
                                            
                                        </div>
                                        <br />
                                        <button onClick = {()=>addArow(index)} style={{marginLeft:350}}>AddCourse</button>
                                        <button onClick={()=>clearAllCourse(index)}>clear All Course</button>
                                    </div>
                
                                    
                                )
                            }
                        </div>
                    </div>
            
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
                show?<button className="file" style={{marginLeft:350}}><input type="file" accept=".csv" onChange={importData} />import CSV file</button>: null
            }
            <>
                <Alert show={show1} variant="success">
                    <Alert.Heading>Hello There!</Alert.Heading>
                    <p>
                        Thank you for using our website. The site automatically stores specialized courses in computer science. You can use it directly. Other school courses need to be edited and added by users.
                        But you can save your lessons for next time. Below is a 4-year graduation plan template for your reference.
                    </p>
                    <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf" >CISC Major Plan 0</a>
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



