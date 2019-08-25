import { useState } from 'react';
import { randomTetromino } from '../tetrominos';

//having the word use is important for react to figure out if it uses usestate
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });
    return [player];
}