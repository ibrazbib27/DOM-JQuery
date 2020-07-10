$(document).ready(function () {
   
     //Objective 1 
  $("body").prepend("<button>Objective #1</button>");
     $("body button:first-child").addClass("btn");
  $('body button:first-child').click(function () { 
    alert("Hello! I hope you are having a great day!");   
});
 
    
    //Objective 2
     $("body button:first-child").after("<button>Objective #2</button>");
   
     $("button:nth-child(2)").addClass("btn");
   $("button:nth-child(2)").after("<textarea disabled></textarea>");
  $('button:nth-child(2)').click(function () { 
      var msg = "Hello! You have now completed objective 2!";
        alert(msg); 
       //Every time the button is clicked, the previous text is being cleared out of the textarea then reappended
        //in console log you can see an aggregate of apprnded messages
       $("textarea").empty();
        
        console.log("objective 2: "+msg);
          $("textarea").append(msg);
});
 
   
    
    
    //Objective 3
    $("textarea").after("<label for='#obj3'>Objective #3</label> <div id='obj3'></div>");
   var divcolor = newColor[Math.floor(Math.random()* (newColor.length))];
    $("#obj3").css('background-color', divcolor);
    
    //mouseover
    $("#obj3").mouseover(function(){
  $("#obj3").css("background-color", newColor[Math.floor(Math.random()* (newColor.length))]);
});
    //mouseout
    $("#obj3").mouseout(function(){
  $("#obj3").css("background-color", divcolor);
});
   
    
    //Objective 4
      $("#obj3").after("<label for='#obj4'>Objective #4</label> <p id='obj4'>The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.</p>");
      $('p').click(function () { 
    $("p").css("color", newColor[Math.floor(Math.random()* (newColor.length))]);
});
 
   
    
    
    
     //Objective 5
    $("p").after("<button>Objective #5</button><div id='obj5'></div>");
   
     $("button").addClass("btn");
  
    ($('button').eq(2)).click(function () { 
    $('#obj5').append("<span>Ibrahim Zbib</span>");
});
     
    
    
    //Objective 6
     var friends = ["Sam", "Diana", "Haley", "Adam", "Joe", "Larry", "Max", "Rick", "Nick", "Ellie", "Joel", "Malcolm"];
     var button4 = document.createElement("button");
    var buttonText4 = document.createTextNode("Objective #6");
     $("#obj5").after("<button>Objective #6</button><ul id='obj6'></ul>");
   
     $("button").addClass("btn");
  
    ($('button').eq(3)).click(function () { 
   $.each(friends, function(i, friend) {
   $("ul").append("<li>"+friend+"</li>");
});
});
     

     
   
     
    
    
});


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