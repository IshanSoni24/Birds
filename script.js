var Data ;


async function  getData () {
    await fetch('./data.json').then(respone => respone.json()).then(data=> {
        Data = data;
        console.log(Data);
        pushData()
        pushData1()
    });
    
}


function pushData() {
    document.getElementById("birds").innerHTML=JSON.stringify(Data[0].birds)+"<br>";
}

function pushData1() {
  document.getElementById("sights").innerHTML = JSON.stringify(Data[1].sighting)+"<br>";
}