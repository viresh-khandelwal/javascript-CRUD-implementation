console.log("hello");

getData();


async function getData(){
    await fetch("./data.json").then((data) => data.json()).then((data) => {
        console.log(data);
    })
}

