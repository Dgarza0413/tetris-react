//the purpose of this file is to export our stage onto the DOM by creating an array within an array

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, "clear"])
    )
