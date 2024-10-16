const fo=document.getElementsByClassName("form");

const tab=document.createElement("table");
// tab.style.height="300px";
// tab.style.width="300px";
tab.style.border="2px solid black";

const row=document.getElementById("row");
const col=document.getElementById("col");

const btn=document.getElementById("sub");
let rowNum=0;
let colNum=0;

btn.addEventListener("click" ,(event)=>{
    event.preventDefault();
    colNum=col.value;
    rowNum=row.value;
    createTable(rowNum,colNum);
})

function createTable(rowNum,colNum){
    for (let cRow = 0; cRow < rowNum; cRow++) {
        const rowCreate=document.createElement("tr");
        // rowCreate.style.height="15px";
        // rowCreate.style.width="100px";
        // rowCreate.style.border="5px solid black";
        for (let cCol = 0; cCol < colNum; cCol++) {
            const data=document.createElement("td")
            data.style.textAlign="center";
            data.textContent="Explorin";
            data.style.height="50px";
            data.style.width="300px";
            data.style.border="2px solid black";
            rowCreate.appendChild(data);
        }
        tab.appendChild(rowCreate);
    }
    document.body.appendChild(tab);
}
