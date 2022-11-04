var todoItems = []
var parentDiv = document.getElementById("box");

function generate() {
    parentDiv.style.display = "flex";
    var input = document.getElementById("input").value
    var p = document.createElement("P")
    var text = input;
    var txtNode = document.createTextNode(text)
    p.appendChild(txtNode)
    p.setAttribute('onclick', 'generate()')
    p.setAttribute('class', 'para')
    var div = document.getElementById('show')
    div.appendChild(p)

    var but = document.createElement("BUTTON")
    var buttonEdit = "Edit"
    var txtNode = document.createTextNode(buttonEdit)
    but.appendChild(txtNode)
    but.setAttribute("onclick", "edit(this)")
    but.setAttribute("class", "copy")
    p.appendChild(but)

    var delet = document.createElement("BUTTON")
    var buttonDelete = "Delete"
    var txtNode = document.createTextNode(buttonDelete)
    delet.appendChild(txtNode)
    delet.setAttribute("onclick", "delet(this)")
    delet.setAttribute("class", "copy")
    p.appendChild(delet)

}

function edit(e) {
    let newTxt= prompt("Enter New Todo");
    update = e.parentNode;
    update.childNodes[0].nodeValue = newTxt;
}

    
function delet(e) {
    e.parentNode.remove()
}

function clearAll() {
    parentDiv.innerHTML = "";   
}
