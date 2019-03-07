function replaceWithLorem(selector, short = false) {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias eum possimus quibusdam quisquam. Cupiditate dolorem doloremque expedita harum itaque maxime modi numquam optio quae quidem repellendus totam, ullam unde.';
    const loremShort = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque consectetur consequatur dolore';

    const text = short ? loremShort : lorem;
    const elements = document.querySelectorAll(selector);
    elements.forEach(x => x.innerText = text);
}
