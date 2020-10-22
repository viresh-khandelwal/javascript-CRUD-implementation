console.log("hello");
let tableData ;
getData();


async function getData(){
    await fetch("./data.json").then((data) => data.json()).then((data) => {
        console.log(data);
        updateTable(data["favorite-songs"]) ;   
    })
}

function updateTable(data){
    tableData = data;
    let tableBody = document.getElementById("playlist-body");
    tableBody.innerHTML = "";

    for(let i in tableData){
        let song = tableData[i];
        let index = +i+1
        tableBody.innerHTML += "<tr>"+
           "<td>"+index+"</td>"+
           "<td>"+song.title+"</td>"+
           "<td>"+song.singer+"</td>"+
           "<td><button id='editButton"+song.id+"' onclick = 'openForm("+song.id+")'>Edit</button></td>"+
           "<td><button id='deleteButton"+song.id+"' onclick = 'deleteSong("+song.id+")'>Delete</button></td>"
        "</tr>";
    }
}

function handleSearch(){
   let searchVal = event.target.value;
   tableData = tableData.filter((song) => {
            if(song.title.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1){
                return true;
            }else{
                return false
            }
   });
   updateTable(tableData);
}

function openForm(id){
    console.log(id)
}

function deleteSong(id){
  console.log(id);
}

