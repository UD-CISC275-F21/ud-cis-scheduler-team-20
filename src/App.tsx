import React, {useState,useEffect} from "react";
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";







const App = () => {
    // const Change = (indexPair : number[]) =>{
    //     console.log(indexPair);
    // };
    

    const [newData,setNewData] = useState([
        {

        },
       
    ]);

    const [pair,setPair] = useState([0,1]);
    const [flag,setFlag] = useState(false);    
    const [show,setshow] = useState(false);
    const [data,setData] = useState([] );
    // useEffect(()=>{
        
    //     const pair1 = JSON.parse(JSON.stringify(pair));
    //     const index1 = pair1[0];
    //     const index = pair1[1];
        
    //     // if (flag == true){
    //     console.log("in useEffec",pair);
    //     console.log(index1);
    //     console.log(index);
    //     const newData2 :typeof newData= JSON.parse(JSON.stringify(newData));
    
    //     newData2[index1]["rowData"].splice(index,1);
    //     console.log(newData[0]) ;
    //     console.log(newData2[0]);
    //     setNewData(newData2);
        
            
            
    //     // }
        
    //     setFlag(false);
    // },[flag]);
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
        
        
        // newData.forEach((value,index)=>{
            
        //     value.rowData.forEach((value1,index1)=>{
        //         if (value1 == params.data){
        //             console.log(value1);
        //             console.log(index);
        //             console.log(index1);
        //             setRowDataIndex(JSON.parse(JSON.stringify(index)));
        //             setRowIndex(index1);
        //             console.log("aaaa",rowDataIndex);
                    
        //             // const newData2 = JSON.parse(JSON.stringify(newData));
        
        //             // newData2[index]["rowData"].splice(index,1);
        //             // setNewData(newData2);
                    
        //         }
        //     });
        

        // });
        console.log(newData);
        const indexNumber = getIndex(newData,params) as number[] ;
        console.log(indexNumber);
        // Change(indexNumber);
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
        
        
        

        // const newData2 = JSON.parse(JSON.stringify(newData));
        
        // newData2[index1]["rowData"].splice(index,1);
        // setNewData(newData2);
        // setTimeout(()=>{/*Your Code*/
        //     const newData2 = JSON.parse(JSON.stringify(newData));
        
        //     newData2[rowDataIndex]["rowData"].splice(rowIndex,1);
        //     setNewData(newData2);
        //     console.log(rowDataIndex);
        //     console.log(rowIndex);
        // }, 3000);
        
        
       
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

    const clearAllSemester=()=>{
        
        setNewData([]);
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
    

    

    return (
        
        <div >
            <h1 style = {{textAlign:"center"}}>Plan Course Of Semester</h1>
            <button onClick={()=>setshow(true)} style={{marginLeft:350}}>Make a plan</button>
            
            {
                show?
                    newData.map((value,index) => (
                        <div key = {index}>
                            
                            <div className="ag-theme-alpine" style={{height: 400, width: 1000,marginLeft:350}}>
                                
                                <AgGridReact rowData={value.rowData} columnDefs={columns} />
                                
                            </div>
                            
                            <button onClick = {()=>addArow(index)} style={{marginLeft:350}}>add A Course</button>
                            <button onClick={()=>clearAllCourse(index)}>clear All Course</button>
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
        </div>
    );
};

export default App;