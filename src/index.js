let firstMuseum

fetch('http://localhost:3000/current-exhibits')
.then(resp => resp.json())
.then(exhibit => {
    renderExhibit(exhibit)


})


function renderExhibit(exhibit) {
    const exhibitTitle = document.getElementById("exhibit-title")
    exhibitTitle.textContent = exhibit.title

    const exhibitDescription = document.getElementById('exhibit-description')
    exhibitDescription.textContent = exhibit.description
    
    

}