//CHANGING FUNCTION CONTEXT WITH .APPLY

function solve(area, vol, input) {
    const cubes = JSON.parse(input);

    const result = cubes.map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)        
    }));


    return result;
}