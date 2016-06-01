

//shuffle function copied from stackoverflow
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



var pp_Random = ["0-sb","0-sb","1-hr","1-hr","2-b","2-b","3-cz","3-cz","4-mz","4-mz","5-p","5-p","6-ps","6-ps","7-tc","7-tc"];

shuffle(pp_Random);

document.body.style.backgroundColor = "#C5EFF7"; 

for(var row = 0; row < 4; row++) {
    
    var containerDiv = document.createElement('div');
    containerDiv.id = "row-" + row;
    containerDiv.style.width = "500px";
    containerDiv.style.height = "100px";
    document.body.appendChild(containerDiv);

    for(var col = 0; col < 4; col++) {

        var gridDiv = document.createElement('div');
        var id = '' + row + ',' + col;
        gridDiv.id = id;
        gridDiv.style.width = "75px";
        gridDiv.style.height = "75px";
        gridDiv.style.margin = "12.5px";
        gridDiv.style.backgroundColor = "white";
        gridDiv.style.cssFloat = "left";
        gridDiv.style.position = "relative";
        gridDiv.style.textAlign = "center";

        document.getElementById('row-' + row).appendChild(gridDiv);  
        
        var imgDiv = document.getElementById(id);

        var insertImage = document.createElement('img');
        insertImage.style.display = "inline";
        insertImage.style.width = "auto";
        insertImage.style.height = "75px";
        var image_name = pp_Random.shift();
        insertImage.src = "./icons/" + image_name + ".png";
        imgDiv.appendChild(insertImage);

        var divDis = document.createElement('div');
        divDis.id = "dis-" + id;
        divDis.className = "dis";
        divDis.style.width = "75px";
        divDis.style.height = "75px";
        divDis.style.position = "absolute";
        divDis.style.top = "0";
        divDis.style.left = "0";
        divDis.style.backgroundColor = "white";
        imgDiv.appendChild(divDis);
        
    }
}


//var transparent = document.getElementById("dis-0,0");
//transparent.style.backgroundColor = "transparent";

/*
$(document).ready(function() {
    console.log('this is ready');
});
*/
$('.dis').click(function (event) {
    //var divClicked = document.getElementById(event.target.id);
    //console.log(divClicked);
    $(this).fadeOut();
    console.log($(this));
    //event.target.css("background-color", "black");
    $("body").css("background-color", "#EC6448");
});


