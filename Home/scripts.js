
const getStartedButton = document.querySelector('.get-started');
const buttonContainer = document.querySelector('.button-container');


function getRandomPosition(element, container) {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - element.clientWidth;
    const maxY = containerRect.height - element.clientHeight;


    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}


getStartedButton.addEventListener('mousemove', function () {

    const { x, y } = getRandomPosition(getStartedButton, buttonContainer);
    

    getStartedButton.style.left = `${x}px`;
    getStartedButton.style.top = `${y}px`;
});
