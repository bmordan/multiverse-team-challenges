const fs = require('fs')

function rotatinator () {
    const results = []
    const challenges = fs.readFileSync('./01.txt').toString().split('\n\n')
    
    for(let challenge of challenges) {
        const [
            _,
            rotations,
            row,
            col
        ] = challenge.split('\n')
        let grid = challenge.split('\n').slice(4).map(arr => arr.split(' '))
        
        for(let r = 1;r <= rotations % 4;r++) { grid = rotate(grid) }
        
        results.push(grid[row-1][col-1])
    }
    
    return console.log(results.reduce((memo, val) => memo *= val))
}

function rotate(grid) {
    return grid.reduce((memo, _, i) => {
        memo.push(grid.map(row => row[i]).reverse())
        return memo
    }, [])
}

rotatinator()

/*
results [ '-41', '35', '-11', '-36', '-61', '85', '28',  '76' ]
6269998996800
*/
