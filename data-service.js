console.log("hello");
let tableData ;
getData();


async function getData(){
    await fetch("./data.json").then((data) => data.json()).then((data) => {
        console.log(data);
        updateTable(data) ;   
    })
}

function updateTable(data){
    tableData = data;
    let tableBody = document.getElementById("playlist-body");
    tableBody.innerHTML = "";
    for(let song of tableData["favorite-songs"]){
        tableBody.innerHTML += "<tr>"+
           "<td>"+song.id+"</td>"+
           "<td>"+song.title+"</td>"+
           "<td>"+song.singer+"</td>"+
           "<td><button id='editButton"+song.id+"'>Edit</button></td>"+
           "<td><button id='deleteButton"+song.id+"'>Delete</button></td>"
        "</tr>";
    }
}

function handleSearch(){
   let searchVal = event.target.value;
   tableData["favorite-songs"] = tableData["favorite-songs"].filter((song) => {
            if(song.title.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1){
                return true;
            }else{
                return false
            }
   });
   updateTable(tableData);
}

