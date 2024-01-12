// document.addEventListener("DOMContentLoaded", function () {
//     // API'den verileri çek
//     fetch("https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec")
//         .then(response => response.json())
//         .then(data => {
//             // API'den gelen verileri kullanarak saat bilgilerini oluştur
//             const worldClockContainer = document.getElementById("worldClockContainer");

//             data.forEach(entry => {
//                 const paralelContainer = document.createElement("div");
//                 paralelContainer.classList.add("paralel-container");

//                 const h2 = document.createElement("h2");
//                 h2.classList.add("h22", "text-white");
//                 h2.textContent = entry.location;

//                 const h3 = document.createElement("h3");
//                 h3.classList.add("h33", "text-white");
//                 h3.textContent = entry.time;

//                 paralelContainer.appendChild(h2);
//                 paralelContainer.appendChild(h3);
//                 worldClockContainer.appendChild(paralelContainer);
//             });
//         })
//         .catch(error => console.error("Error fetching world time:", error));
// });


let containerid = document.querySelector("#containerid");

async function containerapi (){
    try{let url = `http://worldtimeapi.org/api/timezone/Asia`;
    const response = await fetch(url);

    const data = await response.json();

    let apidataall = data.PromiseResult.map((element)=>{
        console.log(element, "element");
    }).join('');}catch{

    }
  
};

console.log(containerapi());