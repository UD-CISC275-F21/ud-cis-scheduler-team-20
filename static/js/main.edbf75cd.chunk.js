(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{39:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),n=r(9),o=r.n(n),s=(r(39),r(34)),l=r(5),c=(r(40),r(24)),u=r(73),d=r(72),C=(r(65),r(66),r(67),r(30)),f=r.n(C),g=r(1),h=function(){var e=Object(a.useState)([{rowData:[{id:0,Course:"CISC 108",Credit:"3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""}]}]),t=Object(l.a)(e,2),r=t[0],i=t[1],n=Object(a.useState)([{rowData:[{id:0,Course:"CISC 108",Credit:"3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""}]}]),o=(Object(l.a)(n,1)[0],Object(a.useState)([{rowData:[{id:0,Course:"CISC 108",Credit:"3",Name:"Introduction to Computer Science 1",Plan:"Take Care",DegreeRequire:"CISC",Presuit:""},{id:1,Course:"CISC 210",Credit:"3",Name:"Introduction to Computer Science 2",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 108"},{id:2,Course:"CISC 220",Credit:"3",Name:"Data Sctructures",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 210"},{id:3,Course:"CISC 260",Credit:"3",Name:"Machine organization and Assembly Language",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 220"},{id:4,Course:"CISC 275",Credit:"3",Name:"Introduction to Software Engineering",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 260"},{id:5,Course:"CISC 303",Credit:"3",Name:"Automata Theory",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 275"},{id:6,Course:"CISC 320",Credit:"3",Name:"Introduction to Algorithms",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 303"},{id:7,Course:"CISC 361",Credit:"3",Name:"Operating Systems",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 320"},{id:8,Course:"CISC 372",Credit:"3",Name:"Parallel Computing",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 361"},{id:9,Course:"CISC 475",Credit:"3",Name:"Advanced Software Engineering",Plan:"Take Care",DegreeRequire:"CISC",Presuit:"CISC 372"},{id:10,Course:"MATH 205",Credit:"4",Name:"Statistical Mathods",Plan:"Take Care",DegreeRequire:"Other",Presuit:""},{id:11,Course:"MATH 210",Credit:"3",Name:"Discrete Mathematics 1",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 205"},{id:12,Course:"MATH 350",Credit:"3",Name:"Probability Theory and Simulation Methods",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 210"},{id:13,Course:"MATH 241",Credit:"4",Name:"Analytic Geometry and Calculus A",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 350"},{id:14,Course:"MATH 242",Credit:"4",Name:"Analytic Geometry and Calculus B",Plan:"Take Care",DegreeRequire:"Other",Presuit:"MATH 241"}]}])),C=Object(l.a)(o,2),h=C[0],j=C[1],S=Object(a.useState)([{name:"CISC",value:10,nowValue:1},{name:"Other",value:5,nowValue:0}]),m=Object(l.a)(S,2),b=m[0],O=m[1],p=Object(a.useState)(3),v=Object(l.a)(p,2),N=v[0],D=v[1],y=Object(a.useState)(!1),w=Object(l.a)(y,2),x=w[0],P=w[1];Object(a.useEffect)((function(){i(r),document.body.addEventListener("mouseup",(function(e){if(L&&e.target){var t=e.target,a=-1!=t.className.indexOf("my-table")?t:t.closest("div.my-table"),n=a?a.dataset.key:"";if(E=""!==n&&null!==n?n:-1,L&&-1!=E&&T&&""!==T.id&&null!==T.id){if(L=!1,-2==E){var o=JSON.parse(JSON.stringify(h)),s=JSON.parse(JSON.stringify(T));if(!s.Course)return alert("Course cannot null"),E=-1,void(T={});for(var l=0;l<o[0].rowData.length;l++){if(o[0].rowData[l].Course==s.Course)return alert("The course already exists"),E=-1,void(T={})}o[0].rowData.push(JSON.parse(JSON.stringify(T))),j(o)}else{var c=JSON.parse(JSON.stringify(r));if(c[E]){for(var u=JSON.parse(JSON.stringify(T)),d=!1,C=0;C<c.length;C++)for(var f=0;f<c[C].rowData.length;f++){var g=JSON.parse(JSON.stringify(c[C].rowData[f]));if(u.Course&&g.Course==u.Course)return alert("The course already exists"),E=-1,void(T={});u.Presuit&&g.Course==u.Presuit&&(d=!0)}if(!u.Presuit||d){c[E].rowData.push(u),i(c);var S=N+1*u.Credit;D(S);for(var m=JSON.parse(JSON.stringify(b)),p=0;p<m.length;p++)if(u.DegreeRequire===m[p].name){m[p].nowValue=m[p].nowValue+1;break}O(m)}else alert("Did not complete the required courses for this class")}}E=-1,T={}}}}))}));var I=[{headerName:"course",field:"Course",sortable:!0,editable:!0,rowDrag:!0},{headerName:"credit",field:"Credit",sortable:!0,editable:!0},{headerName:"name",field:"Name",sortable:!0,editable:!0},{headerName:"plan",field:"Plan",sortable:!0,editable:!0},{field:"DegreeRequire",editable:!0,cellEditor:"agRichSelectCellEditor",cellEditorParams:{values:["CISC","Other"]}},{field:"Presuit",editable:!0,cellEditor:"agRichSelectCellEditor"},{headerName:"action",field:"Action",cellRendererFramework:function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){return R(e)},children:"Delete"})})}}],k=[{headerName:"",field:"",sortable:!0,editable:!0,rowDrag:!0,width:40},{headerName:"pool of courses",field:"pool of courses",width:300,cellRendererFramework:function(e){return Object(g.jsxs)("div",{children:[e.data.Course,"-",e.data.Name,"(",e.data.Credit,"cr)"]})}}];var T,R=function(e){console.log(r);var t=function(e,t){for(var r=0;r<e.length;r++)for(var a=0;a<e[r].rowData.length;a++)if(e[r].rowData[a].id==t.data.id)return[r,a]}(r,e);console.log(t),console.log("before",r);var a=t[0],n=t[1];if(console.log(a),null!=t){var o=JSON.parse(JSON.stringify(r));o[a].rowData.splice(n,1);try{i(o),console.log("after",r)}catch(l){console.log(l)}var s=JSON.parse(JSON.stringify(r));console.log("data3",s)}},J=Object(a.useState)(!0),A=Object(l.a)(J,2),q=A[0],M=A[1],E=-1,L=!1,H=function(e){if(e.target){var t=e.target;T=t.__agComponent.rowNode.data}L=!0},F=Object(a.useState)([]),G=Object(l.a)(F,2),V=G[0],B=G[1],_=function(e,t){var r=Object(s.a)(V);r[t]=e.api,B(r)};return Object(g.jsxs)("div",{className:"app-box",children:[Object(g.jsx)("h1",{style:{textAlign:"center"},children:"Plan Course Of Semester"}),Object(g.jsx)("button",{onClick:function(){return P(!0)},style:{marginLeft:350},children:"Make a plan"}),x?Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("div",{children:h.map((function(e,t){return Object(g.jsx)("div",{className:"my-table","data-key":-2,children:Object(g.jsx)("div",{className:"ag-theme-alpine",style:{height:400,width:350},children:Object(g.jsx)(c.AgGridReact,{onDragStarted:H,suppressExcelExport:!0,onGridReady:function(e){_(e,t)},rowData:e.rowData,columnDefs:k,rowDragManaged:!0,animateRows:!0,suppressMoveWhenRowDragging:!0})})},t)}))}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:["total credit: ",N]}),b.map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:[e.name,": ",e.nowValue,"/",e.value]})},t)})),r.map((function(e,t){return Object(g.jsxs)("div",{className:"my-table","data-key":t,children:[Object(g.jsxs)("div",{className:"ag-theme-alpine",style:{height:400,width:1400,marginLeft:10},children:[Object(g.jsx)("button",{onClick:function(){return function(e){V[e].exportDataAsCsv()}(t)},children:"export CSV file"}),Object(g.jsx)(c.AgGridReact,{onDragStarted:H,suppressExcelExport:!0,onGridReady:function(e){_(e,t)},rowData:e.rowData,columnDefs:I,rowDragManaged:!0,animateRows:!0,suppressMoveWhenRowDragging:!0})]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return function(e){var t={id:h.length,Course:"",Credit:"",Name:"",Plan:""};console.log(t);var a=JSON.parse(JSON.stringify(r));a[e].rowData.push(t),console.log(a[e]),i(a)}(t)},style:{marginLeft:350},children:"AddCourse"}),Object(g.jsx)("button",{onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(r));t[e].rowData=[],i(t)}(t)},children:"clear All Course"})]},t)}))]})]}):null,x?Object(g.jsx)("button",{onClick:function(){return function(){var e=JSON.parse(JSON.stringify(r));e.push({rowData:[]}),i(e)}()},style:{marginLeft:350},children:"Add a Semester"}):null,x?Object(g.jsx)("button",{onClick:function(){return function(){var e=JSON.stringify(r);localStorage.setItem("savedData",e),console.log(localStorage.getItem("savedData"))}()},style:{marginLeft:350},children:"Save"}):null,x?Object(g.jsx)("button",{onClick:function(){return function(){var e=localStorage.getItem("savedData"),t=JSON.parse(e||"{}");i(t)}()},style:{marginLeft:350},children:"Load"}):null,x?Object(g.jsx)("button",{onClick:function(){i([{rowData:[]}])},style:{marginLeft:350},children:"Clear All Semester"}):null,x?Object(g.jsxs)("button",{className:"file",style:{marginLeft:350},children:[Object(g.jsx)("input",{type:"file",accept:".csv",onChange:function(e){if(e.target.files){var t=e.target.files[0];if(e.target.value="",t){var a=new FileReader;a.readAsBinaryString(t),a.onload=function(e){if(e.target&&e.target.result){var t=e.target.result;f.a.parse(t,{encoding:"UTF-8",complete:function(e){for(var t=e.data,a=r,n=[],o=1;o<t.length;o++){var s=t[o],l={id:s[0],Course:s[1],Credit:s[2],Name:s[3],Plan:s[4],DegreeRequire:s[5],Presuit:s[6]};n.push(l)}a.push({rowData:n}),i(JSON.parse(JSON.stringify(a)))}})}}}}}}),"import CSV file"]}):null,Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(u.a,{show:q,variant:"success",children:[Object(g.jsx)(u.a.Heading,{children:"Hello There!"}),Object(g.jsx)("p",{children:"Thank you for using our website. The site automatically stores specialized courses in computer science. You can use it directly. Other school courses need to be edited and added by users. But you can save your lessons for next time. Below is a 4-year graduation plan template for your reference."}),Object(g.jsx)("a",{href:"https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf",children:"CISC Major Plan 0"}),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{className:"d-flex justify-content-end",children:Object(g.jsx)(d.a,{onClick:function(){return M(!1)},variant:"outline-success",children:"Got!"})})]}),!x&&Object(g.jsx)(d.a,{onClick:function(){return M(!0)},children:"Guide"})]})]})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,74)).then((function(t){var r=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),a(e),i(e),n(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(h,{})}),document.getElementById("root")),j()}},[[69,1,2]]]);
//# sourceMappingURL=main.edbf75cd.chunk.js.map