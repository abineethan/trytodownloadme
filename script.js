window.addEventListener('load', () => {
    setTimeout(() => {
        const content = document.getElementById('content');
        content.style.opacity = '1';
        
        setTimeout(() => {
            const buttonContainer = document.getElementById('buttonContainer');
            buttonContainer.style.display = 'block';
            buttonContainer.classList.add('zoom-in');
        }, 1000); 
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', () => {
    const warningModal = document.getElementById('desktopWarning');
    const warningCloseButton = document.getElementById('warningCloseButton');

    if (window.innerWidth < 1024) {
        warningModal.style.display = 'flex';
    }

    warningCloseButton.addEventListener('click', () => {
        warningModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === warningModal) {
            warningModal.style.display = 'none';
        }
    });
});

