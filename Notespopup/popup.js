var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbtn = document.getElementById("addpopup")

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel = document.getElementById("cancel")
cancel.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container =document.querySelector(".container")
var addbook = document.getElementById("addbook")
var booktitle = document.getElementById("booktitle")
var bookauthor = document.getElementById("bookauthor")
var bookdescription = document.getElementById("bookdescription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


function del(event)
{
    event.target.parentElement.remove()
}