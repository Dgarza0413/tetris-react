# Tetris-React
We are building a tetris game in react following a gamedev tutorial

# Synopsis
This application uses react along with hooks to communication various functions across components to create a tetris like game. As well as the styled components for our css designs


# concept review/questions
1. We intialize our assets by establishing our font, img, and specialized hook while creating our components
2. Our components are then created to establish our game board and grid.
3. We use the yarn add styled-components to develop the games css 
4. We create our hooks files usePlayer, Stage, GameStatus to provide functions to our main Tetris.js file that are initalized as values inside arrays seen in the Tetris.js file

# notes
I have noticed that the instructor does not intialize state at all in the app but uses useState only that references our use of hooks in this application.

The more complicated function was: 
`const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }`

what is function does is that on rotatation it checks if something is to be collided and if it isn't collided, it rotates to an available space and doesn't push past the boundary

# about 
