var sayCorrect = function()
{
    var node = document.createElement("p");
    node.innerText = "1: Correct. You clearly use sound logic and reasoning. Aquaman was good though";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button1").setAttribute("onclick",null)
    document.querySelector("#button2").setAttribute("onclick",null)

}

var sayFalse = function()
{
    var node = document.createElement("p");
    node.innerText = "1: Wrong. I love DC characters as much as the next guy, but just be realistic.";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button2").setAttribute("onclick",null)
    document.querySelector("#button1").setAttribute("onclick",null)
}
    var sayCorrect2 = function()
{
    var node = document.createElement("p");
    node.innerText = "2: Correct. I do not understand why anybody would ever want that mixture";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button3").setAttribute("onclick",null)
    document.querySelector("#button4").setAttribute("onclick",null)

}

var sayFalse2 = function()
{
    var node = document.createElement("p");
    node.innerText = "2: Wrong. You are the reason for many problems existing in the world right now";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button4").setAttribute("onclick",null)
    document.querySelector("#button3").setAttribute("onclick",null)
    
    
}    
     

   var sayCorrect3 = function()
{
    var node = document.createElement("p");
    node.innerText = "3: Wrong. How can water be wet? Wet is a defining attribute of something; wet is the feeling of water molecules in contact with non water molecules.";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button5").setAttribute("onclick",null)
    document.querySelector("#button6").setAttribute("onclick",null)

}

var sayFalse3 = function()
{
    var node = document.createElement("p");
    node.innerText = "3: Correct. You have common sense obviously. Water is not wet. Wet is the feeling of water upon something, or in contact with it.";
    
    
   var body = 
       document.querySelector("body");
    body.appendChild(node);
    
    document.querySelector("#button6").setAttribute("onclick",null)
    document.querySelector("#button5").setAttribute("onclick",null)
    
    
} 
    
    
    
