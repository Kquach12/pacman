let world = [                                           //World Array
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,0,2,0,1,0,0,3,2,3,0,1,2],
    [2,1,1,2,2,2,2,0,1,0,0,0,2,1,0,1,2],
    [2,1,1,1,1,0,1,0,1,0,0,0,2,2,2,1,2],
    [2,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,2],
    [2,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,2],
    [2,1,1,1,1,0,1,3,1,0,0,0,1,1,0,1,2],
    [2,1,1,1,1,0,1,3,1,0,0,0,1,1,0,1,2],
    [2,1,1,1,2,2,2,2,2,2,2,2,2,1,0,1,2],
    [2,1,1,1,2,0,1,0,1,3,0,0,2,1,0,1,2],
    [2,1,1,1,2,0,1,0,1,0,0,0,2,1,0,1,2],
    [2,1,1,1,2,2,2,2,1,0,2,2,2,1,0,1,2],
    [2,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]



function displayWorld(){                                //Build World
    let output ="";
    for (var i = 0; i < world.length; i++){
        output += "\n<div class = 'row'>"
        for (var j = 0; j < world[i].length; j++){
            if (world[i][j] === 3){
                output += "\n\t<div class = 'cherry'></div>"
            }
            if (world[i][j] === 2){
                output += "\n\t<div class = 'brick'></div>"
            }
            if (world[i][j] === 1){
                output += "\n\t<div class = 'coin'></div>"
            }
            if (world[i][j] === 0){
                output += "\n\t<div class = 'empty'></div>"
            }
        }
        output += "\n</div>"
    }
    document.querySelector("#world").innerHTML = output;
}

displayWorld()

var pacmanPosition = {                                      //Pacman coordinates
    x: 1,
    y: 1
};

function movePacman(){
    document.querySelector("#pacman").style.left = 30 * pacmanPosition.x + "px"
    document.querySelector("#pacman").style.top = 30 * pacmanPosition.y + "px"
}

movePacman();

let score = 0

document.onkeydown = function(e){                               //Moving Pacman
    console.log(e);
    if (e.key === "ArrowRight" && world[pacmanPosition.y][pacmanPosition.x + 1] !== 2){
        pacmanPosition.x += 1;
        document.getElementById("pacman").style.transform = "rotate(0deg)"
    }
    if (e.key === "ArrowLeft" && world[pacmanPosition.y][pacmanPosition.x - 1] !== 2){
        pacmanPosition.x -= 1;
        document.getElementById("pacman").style.transform = "rotate(180deg)"
    }
    if (e.key === "ArrowDown" && world[pacmanPosition.y + 1][pacmanPosition.x] !== 2){
        pacmanPosition.y += 1;
        document.getElementById("pacman").style.transform = "rotate(90deg)"
    }
    if (e.key === "ArrowUp" && world[pacmanPosition.y - 1][pacmanPosition.x] !== 2){
        pacmanPosition.y -= 1;
        document.getElementById("pacman").style.transform = "rotate(270deg)"
    }

    if (world[pacmanPosition.y][pacmanPosition.x] == 1){                //Update Score
        world[pacmanPosition.y][pacmanPosition.x] = 0;
        score +=1
        document.getElementById("score").innerText = score
        displayWorld();
    }
    if (world[pacmanPosition.y][pacmanPosition.x] == 3){
        world[pacmanPosition.y][pacmanPosition.x] = 0;
        score +=5
        document.getElementById("score").innerText = score
        displayWorld();
    }

    movePacman()
}
