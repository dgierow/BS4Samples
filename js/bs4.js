const loremLengths = {
    TINY: 1,
    SHORT: 2,
    MEDIUM: 3,
    LONG: 4
};

function replaceWithLorem(selector, length) {
    const long = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem, culpa debitis dignissimos ducimus excepturi inventore ipsa nemo nostrum nulla officia omnis perferendis quas qui quis soluta, sunt, velit voluptates.';
    const medium = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem, culpa debitis dignissimos ducimus excepturi inventore ipsa nemo nostrum nulla.';
    const short = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem, culpa debitis.';
    const tiny = 'Lorem ipsum dolor sit amet.';

    let text = '';
    switch(length){
        case loremLengths.TINY:
            text = tiny;
            break;
        case loremLengths.SHORT:
            text = short;
            break;
        case loremLengths.MEDIUM:
            text = medium;
            break;
        case loremLengths.LONG:
            text = long;
            break;
    }

    const elements = document.querySelectorAll(selector);
    elements.forEach(x => x.innerText = text);
}