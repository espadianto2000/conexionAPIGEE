window.onload = function f(){
    const req = new XMLHttpRequest();
    req.onload = (e) => {
        data = JSON.parse(req.response)
        const men = document.getElementById("menu");
        data.forEach(element => {
            console.log(element["nombre"]);
            i = document.createElement("li");
            i.innerHTML+= "<p>"+element["nombre"]+"</p><img src='"+element["foto"]+"' width='200px' height='100px'></img>";
            men.appendChild(i);
        });
      }
    req.open("GET", "https://34.117.250.241.nip.io/carros");
    req.send();
    

}

