console.log("hello");

getData();


async function getData(){
    await fetch("./data.json").then((data) => data.json()).then((data) => {
        console.log(data);
        let tableBody = document.getElementById("playlist-body");
        for(let song of data["favorite-songs"]){
            console.log(song);
            tableBody.innerHTML += "<tr>"+
               "<td>"+song.id+"</td>"+
               "<td>"+song.title+"</td>"+
               "<td>"+song.singer+"</td>"+
               "<td><button id='editButton"+song.id+"'>Edit</button></td>"+
               "<td><button id='deleteButton"+song.id+"'>Delete</button></td>"
            "</tr>";
        }
    })
}

