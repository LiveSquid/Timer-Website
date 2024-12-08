function drawGrid(matrix, offset) {
    let colorMap = [
        "#000",
        '#4dff00',
        '#ffa200',
        '#ff00ea',
        '#00e5ff',
        '#ffea00',
        '#ff008c',
        '#ff0090',
        '#0004ff',
        '#ffffff'
    ];
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colorMap[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}