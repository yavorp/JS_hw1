function jumpingJimmy(tower, jumpHeight) {
    let currentHeight = 0;
    tower.forEach(element => {
        if(element > jumpHeight) {
            return currentHeight;
        }
        currentHeight+=element;
    });
}
