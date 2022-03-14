
// function createTower(floors){
//     let tower = [];
//     let numOfAsterisk = rowSize(floors);
//     const rowNum = rowSize(floors);
//     while(numOfAsterisk > 0){
//         let row = '';
//         let numOfSpaces = rowNum - numOfAsterisk;
//         for(let i = 0; i < numOfAsterisk; i++){
//             row += '*'
//         }
//         for(let i = 0; i < numOfSpaces/2; i++){
//             row = ' ' + row + ' ';
//         }
//         tower.push(row);
//         numOfAsterisk -= 2;
//     }
//     return tower.reverse();
// }

let rowSize = floors => {
    let num = 1;
    while(floors > 1){
        num += 2;
        floors--;
    }
    return num;
}

towers2 = function(layers) {
    tree = []; 
    for (i = layers; i > 0; i--){
        aster = '*'.repeat(i * 2 - 1);
        spacez = ' '.repeat(layers - i);
        finl = spacez+aster+spacez;tree.unshift(finl);
    }
    return tree;
}

console.log(towers2(6))

// console.log(createTower(6));