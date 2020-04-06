var isClicked = false;

//BUTTON FOR ADDING BOXES
var addBoxBtn = document.createElement("button");
var text = document.createTextNode("+");   
addBoxBtn.appendChild(text);
addBoxBtn.setAttribute('id', 'addBox')

document.getElementsByTagName("form")[0].onsubmit = function() {return false;}
var inputChange = function() {
    var inputVal = document.getElementById("quantity").value;
    if(inputVal<=10 && inputVal>0 && isClicked === false){
        isClicked=true;
        for(i=0; i<inputVal ;i++) { 
            var boxDiv = document.createElement("div");
            var box = document.createElement("input");
            var deleteBoxBtn = document.createElement('button');
            box.setAttribute("type", "text")
            box.setAttribute("maxlength", "1")
            box.setAttribute("pattern", "[A-Za-z]")
            box.setAttribute("title", "Only alpha characters")
            document.getElementById('boxes').appendChild(box).classList.add("box");
        }
    }
    if(isClicked){
        document.getElementById('form').appendChild(addBoxBtn).classList.add("addBox");

    }
    document.getElementById('addBox').addEventListener("click", function(){
        var boxDiv = document.createElement("div");
        var box = document.createElement("input");
        var deleteBoxBtn = document.createElement('button');
        box.setAttribute("type", "text")
        box.setAttribute("maxlength", "1")
        box.setAttribute("pattern", "[A-Za-z]")
        box.setAttribute("title", "Only alpha characters")
        document.getElementById('boxes').appendChild(box).classList.add("box");
        })
    
};
