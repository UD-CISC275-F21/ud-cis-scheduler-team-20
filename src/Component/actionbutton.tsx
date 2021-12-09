import { useState } from "react";




// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const actionButton = (params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }) => {
    
    const [newData,setNewData] = useState([
        {
            "rowData":[
                {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
            ], 
        },
   
    ]);

    const [newDataType] = useState([{
        "rowData":[
            {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
        ], 

   
    }]);

    function getIndex(abc:typeof newDataType,params: { data: { id: number; Course: string; Credit: string; Name: string; Plan: string; }; }){
        for (let i=0;i<abc.length;i++){
            for(let j = 0;j<abc[i].rowData.length;j++){
                if (abc[i].rowData[j].id==params.data.id){
                    return [i,j] ;
                }
            }
        }
    }

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


