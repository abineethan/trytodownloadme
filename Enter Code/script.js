const correctCode = "618735728";

const codeInput = document.getElementById('codeInput');
const getButton = document.getElementById('getButton');
const errorMessage = document.getElementById('errorMessage');

getButton.style.display = 'none';

codeInput.addEventListener('input', () => {

    if (codeInput.value === correctCode) {
        getButton.style.display = 'inline-block'; 
        errorMessage.style.display = 'none';     
    } else {
        getButton.style.display = 'none';        
        errorMessage.style.display = 'block';    
    }
});



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
