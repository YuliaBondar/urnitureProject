const object = [
    {
        id: 1,
        photo: '../images/mainphoto/first.png',
        name: 'СВЕТИЛЬНИК',
        text: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
        price: '150 000',
        aftertext: 'Benjamin Moore',
        color: '#CBB6FF'
    },
    {
        id: 2,
        photo: '../images/mainphoto/second.png',
        name: 'КРЕСЛО',
        text: 'Эргономичное кресло для уютного отдыха и работы',
        price: '150 000',
        aftertext: 'Paint Here Glory',
        color: '#FFA8F6'
    },
    {
        id: 3,
        photo: '../images/mainphoto/third.png',
        name: 'СТОЛ',
        text: 'Прочный и стильный стол для вашего офиса или дома',
        price: '150 000',
        aftertext: 'Benjamin Moore',
        color: '#C8DEFF'
    }
];

const blockContent = document.querySelector('.block-content');

object.forEach((item, index) => { 
    const block = document.createElement('div');
    block.classList.add('content-block', `content-block-${index + 1}`); 
    block.innerHTML = `
        <div class="images-from-content">
            <p style='color:${item.color}' class="overlay-text">${item.aftertext}</p>
            <img class="images-block" src="${item.photo}" alt="${item.name}">
        </div>
        <div class="content-items">
            <h3 style='font-family:Euclid Circular A; font-size:20px'>${item.name}</h3>
            <p style='font-family:Euclid Circular A; font-size:15px'>${item.text}</p>
            <hr/>
            <p style='font-family:Floreste; font-size:28px'>${item.price}<sup>₽</sup></p>
        </div>`;
    blockContent.appendChild(block);
});

const contentBlocks = blockContent.querySelectorAll('.content-block');
let expandedBlockIndex = null;

contentBlocks.forEach((currentBlock, currentIndex) => {
    currentBlock.addEventListener('click', () => {
        if (expandedBlockIndex === currentIndex) {
            // Если нажали на уже увеличенный блок, вернуть все блоки в исходное состояние
            contentBlocks.forEach((block) => {
                block.style.width = '';
                block.querySelector('.content-items').style.display = 'block';
                block.querySelector('.images-block').style.transform = 'scale(1)';
                const slideNumber = block.querySelector('.slide-number');
                if (slideNumber) {
                    slideNumber.remove();
                }
                const overlayText = block.querySelector('.overlay-text');
                if (overlayText) {
                    overlayText.style.display = 'block';
                }
                const buyButton = block.querySelector('.buy-button');
                if (buyButton) {
                    buyButton.remove();
                }
            });
            expandedBlockIndex = null;
        } else {
            // Если нажали на другой блок, увеличить его и уменьшить остальные
            contentBlocks.forEach((block, index) => {
                if (index === currentIndex) {
                    block.style.width = `${parseInt(block.offsetWidth) * (expandedBlockIndex !== null ? 5 : 2.5)}px`;
                    block.querySelector('.content-items').style.display = 'block';
                    block.querySelector('.images-block').style.transform = 'scale(1)';
                    const slideNumber = block.querySelector('.slide-number');
                    if (slideNumber) {
                        slideNumber.remove();
                    }
                    const overlayText = block.querySelector('.overlay-text');
                    if (overlayText) {
                        overlayText.style.display = 'block';
                        overlayText.style.fontSize = '70px'; 
                    }
                    if (!block.querySelector('.buy-button')) {
                        const buyButton = document.createElement('button');
                        buyButton.classList.add('buy-button');
                        buyButton.textContent = 'Купить';
                        block.querySelector('.content-items').appendChild(buyButton);
                    }
                } else {
                    block.style.width = '';
                    block.querySelector('.content-items').style.display = 'none';
                    block.querySelector('.images-block').style.transform = 'scale(0.6)';
                    const overlayText = block.querySelector('.overlay-text');
                    if (overlayText) {
                        overlayText.style.display = 'none';
                    }
                    if (!block.querySelector('.slide-number')) {
                        block.querySelector('.images-from-content').innerHTML += `<p class="slide-number">СЛАЙД <br/><br/><span style='font-size:40px'>0${index + 1}<span></p>`;
                    }
                    const buyButton = block.querySelector('.buy-button');
                    if (buyButton) {
                        buyButton.remove();
                    }
                }
            });
            expandedBlockIndex = currentIndex;
        }
    });
});
