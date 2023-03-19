const myDiv = document.getElementById('output')

 
btn.onclick = () => {
    const numberRamdom = Math.floor(Math.random() * 100)
    fetch("https://bobsburgers-api.herokuapp.com/characters/" +numberRamdom)
    .then(response => response.json())
    .then(data => {
        let resultsDiv = ""
        console.log(data)
        resultsDiv += "<h3>"+data.name+"</h3>"+
        "<p>"+data.occupation+"</p>"+
        "<img src = '"+data.image+"'>"

        myDiv.innerHTML = resultsDiv
    })
}

