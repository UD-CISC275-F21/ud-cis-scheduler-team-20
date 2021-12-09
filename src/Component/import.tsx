import Papa from "papaparse";
import { ChangeEvent, useState } from "react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";





// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const importData = (e: ChangeEvent<HTMLInputElement>) => {
    const [newData,setNewData] = useState([
        {
            "rowData":[
                {id:0,Course: "CISC 108", Credit: "3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},
            ], 
        },
   
    ]);
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