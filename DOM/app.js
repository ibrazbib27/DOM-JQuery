document.addEventListener("DOMContentLoaded", function(){
     //Objective 1 
    var button1 = document.createElement("button");
    var buttonText = document.createTextNode("Objective #1");
   
    button1.className = "btn";
 
    button1.appendChild(buttonText);
    document.body.appendChild(button1);
    button1.addEventListener("click", function(){
        alert("Hello! I hope you are having a great day!");      
    })
    
    
    //Objective 2
    var button2 = document.createElement("button");
    var buttonText2 = document.createTextNode("Objective #2");
   
    button2.className = "btn";
    
    button2.appendChild(buttonText2);
    var textarea = document.createElement("textarea");
    textarea.disabled = true;
    document.body.appendChild(button2);
    document.body.appendChild(textarea);
    button2.addEventListener("click", function(){
        //Every time the button is clicked, the previous text is being cleared out of the textarea then reappended
        //in console log you can see an aggregate of apprnded messages
        if((textarea.childNodes).length > 0)
           textarea.removeChild(textarea.firstChild);
        var msg = "Hello! You have now completed objective 2!";
        alert(msg); 
        var text = document.createTextNode(msg);
        
        console.log("objective 2: "+msg);
         textarea.appendChild(text);
    })
    
    
    //Objective 3
    var div1 = document.createElement("div");
    var label1 = document.createElement("label");
    var labeltext1 = document.createTextNode("Objective #3");
    label1.appendChild(labeltext1);
    
    div1.id = "obj3";
     label1.htmlFor = div1.id;
     document.body.appendChild(label1);
    div1.style.backgroundColor = newColor[Math.floor(Math.random()* (newColor.length))];
    var divcolor = div1.style.backgroundColor;
    document.body.appendChild(div1);
    (div1).onmouseover = function(){ div1.style.backgroundColor = newColor[Math.floor(Math.random()* (newColor.length))];};
    (div1).onmouseout = function(){ div1.style.backgroundColor = divcolor};
    
    
    
    //Objective 4
     var p = document.createElement("p");
    var label2 = document.createElement("label");
    var labeltext2 = document.createTextNode("Objective #4");
    label2.appendChild(labeltext2);
    var ptext = document.createTextNode("The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.");
    p.appendChild(ptext);
    p.id = "obj4";
    document.body.appendChild(label2);
    document.body.appendChild(p);
    (p).onclick = function(){ p.style.color = newColor[Math.floor(Math.random()* (newColor.length))];};
    
    
    
     //Objective 5
     var button3 = document.createElement("button");
    var buttonText3 = document.createTextNode("Objective #5");
   
    button3.className = "btn";
    
    button3.appendChild(buttonText3);
   
    document.body.appendChild(button3);
   var div3 = document.createElement("div");
   
    
    div3.id = "obj5";
    
   
    document.body.appendChild(div3);
     
   
    button3.addEventListener("click", function(){
        var span = document.createElement("span");
    var spanText = document.createTextNode("Ibrahim Zbib");
        span.appendChild(spanText);
       div3.appendChild(span);
       
    })
    
    
    //Objective 6
     var friends = ["Sam", "Diana", "Haley", "Adam", "Joe", "Larry", "Max", "Rick", "Nick", "Ellie", "Joel", "Malcolm"];
     var button4 = document.createElement("button");
    var buttonText4 = document.createTextNode("Objective #6");
   
    button4.className = "btn";
    
    button4.appendChild(buttonText4);
   
    document.body.appendChild(button4);
   var ul = document.createElement("ul");
   
    
    ul.id = "obj6";
    
   
    document.body.appendChild(ul);
     
   
    button4.addEventListener("click", function(){
        friends.forEach(friendsList);
        function friendsList(friend){
        var li = document.createElement("li");
    var liText = document.createTextNode(friend);
        li.appendChild(liText);
       ul.appendChild(li);
        }
       
    })
    
    
})


//found this here: https://gist.github.com/bobspace/2712980
const newColor = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];