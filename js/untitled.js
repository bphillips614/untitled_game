let grid = null;

const initGrid = () => {
    const html = 
        `<div id="grid">
            ${drawSpace(0, 0, true)}
        </div>`;
    $("#untitled").append(html);

    // TODO change to 'on arrow up'
    $("#player").click(moveNorth);
}

const drawSpace = (x, y, withPlayer) => {
    if (withPlayer) {
        $("#player").remove();
    }
    return `<div class="space" posX="${x}" posY="${y}">
                <div class="coord">${x}, ${y}</div>
                ${withPlayer ? 
                    `<div id="player"></div>` 
                    : null}
            </div>`;
}

const moveNorth = () => {
    const space = $('#player').parent('.space');
    const x = parseInt(space.attr('posX'));
    const y = parseInt(space.attr('posY')) + 1;
    $("#grid").prepend(drawSpace(x, y, true));
}

$(document).ready(() => {
    initGrid();
});