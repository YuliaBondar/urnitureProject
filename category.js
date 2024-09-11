document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { id: 1, photo: '../images/floorMirror/mirror1.png', name: 'напольные зеркала', quantity: '4шт' },
        { id: 2, photo: '../images/floorLamp/lamp5.png', name: 'торшеры и лампы', quantity: '4шт' },
        { id: 3, photo: '../images/armchairsСhairs/chair1.png', name: 'кресла и стулья', quantity: '4шт' },
        { id: 4, photo: '../images/tablesСabinets/tabel1.png', name: 'столы и тумбы', quantity: '4шт' }
    ];

    const floorMirror = [
        { id: 1, photo: '../images/floorMirror/sec.png', name: "Kristin", text: 'Напольное зеркало',color:'#A5D4FF', price: '150 000' },
        { id: 2, photo: '../images/floorMirror/third.png', name: "Arlene", text: 'Напольное зеркало',color:'#F0B3EA', price: '150 000' },
        { id: 3, photo: '../images/floorMirror/fourth.png', name: "Colleen", text: 'Напольное зеркало',color:'#8ECDFA', price: '150 000' },
        { id: 4, photo: '../images/floorMirror/fifth.png', name: "coppelia", text: 'Напольное зеркало',color:'#FBE4CA', price: '150 000' },
        { id: 5, photo: '../images/floorMirror/six.png', name: "artemide", text: 'Напольное зеркало',color:'#F0B5FA', price: '150 000' }
    ];

    const floorLamp = [
        { id: 1, photo: '../images/floorLamp/lamp1.png', name: "Aubrey", text: 'Лампа настольная',color:'#F0B5FA', price: '150 000' },
        { id: 2, photo: '../images/floorLamp/lamp2.png', name: "Leslie", text: 'Лампа настольная',color:'#88E379', price: '`150 000' },
        { id: 3, photo: '../images/floorLamp/lamp3.png', name: "Darrell", text: 'Лампа настольная',color:'#FA8EEF', price: '150 000' },
        { id: 4, photo: '../images/floorLamp/lamp4.png', name: "Coppelia", text: 'Лампа настольная',color:'#29D0D9', price: '150 000' },
        { id: 5, photo: '../images/floorLamp/lamp5.png', name: "Artemide", text: 'Лампа настольная',color:'##89D5FF', price: '150 000' }
    ];

    const armchairsChairs = [
        { id: 1, photo: '../images/armchairsСhairs/ch1.png', name: "Kathryn", text: 'Зеркало напольное',color:'#FBE4CA', price: '150 000' },
        { id: 2, photo: '../images/armchairsСhairs/ch2.png', name: "Wendy", text: 'Зеркало напольное',color:'#F0B3EA', price: '150 000' },
        { id: 2, photo: '../images/armchairsСhairs/ch3.png', name: "Judith", text: 'Зеркало напольное',color:'#F18EFA', price: '150 000' },
        { id: 2, photo: '../images/armchairsСhairs/ch4.png', name: "Jane", text: 'Зеркало напольное',color:'#5C544A', price: '150 000' },
        { id: 2, photo: '../images/armchairsСhairs/ch5.png', name: "Darlene", text: 'Зеркало напольное',color:'#F0B5FA', price: '150 000' }
    ];

    const tablesCabinets = [
        { id: 1, photo: '../images/tablesСabinets/tabel1.png', name: "Kathryn", text: 'Зеркало напольное',color:'#A5D4FF', price: '150 000' },
        { id: 2, photo: '../images/tablesСabinets/table2.png', name: "Wendy", text: 'Зеркало напольное',color:'#F0DFB3', price: '150 000' },
        { id: 3, photo: '../images/tablesСabinets/table3.png', name: "Judith", text: 'Зеркало напольное',color:'#F88EFA', price: '150 000' },
        { id: 4, photo: '../images/tablesСabinets/table4.png', name: "Jane", text: 'Зеркало напольное',color:'#CACFFB', price: '150 000' },
        { id: 5, photo: '../images/tablesСabinets/table5.png', name: "Darlene", text: 'Зеркало напольное',color:'#F0B5FA', price: '150 000' }
    ];

    const contentCategory = document.getElementById('content-category');
    const contentDetails = document.getElementById('content-details');

    categories.forEach(({ id, photo, name, quantity }) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('first');
        categoryDiv.innerHTML = `
            <p>${name.replace(' ', '<br/>')}</p>
            <img style="width:200px;" src="${photo}">
            <div class="quantity">
                <div class="for-col" style="background-color: pink; border-radius: 40%;">${quantity}</div>
            </div>
            
            <div class="arrow">
                <button onclick="toggleDetails(${id})"><i class="fa fa-arrow-down"></i></button>
            </div>
        `;
        contentCategory.appendChild(categoryDiv);
    });

    window.toggleDetails = function(id) {
        if (contentDetails.innerHTML !== '') {
            contentDetails.innerHTML = '';
            return;
        }

        let items;
        switch (id) {
            case 1:
                items = floorMirror;
                break;
            case 2:
                items = floorLamp;
                break;
            case 3:
                items = armchairsChairs;
                break;
            case 4:
                items = tablesCabinets;
                break;
            default:
                items = [];
        }

        contentDetails.innerHTML = ''; 

// Добавляем элемент с количеством позиций один раз
// const categoryDiv = document.createElement('div');
// categoryDiv.innerHTML = '20 позиций в категории';
// contentDetails.appendChild(categoryDiv);

items.forEach(({ photo, name, text, price, color }) => {
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('detail');
    detailDiv.innerHTML = `
        <div style="background-color:${color}; width:10px; height:10px; border-radius:50%; border: 2px solid white;"></div>
        <img style="width:200px;" src="${photo}">
        <p style='font-size:20px'>${name}</p>
        
        <p style='font-size:15px'>${text}</p>
        <div style='display:flex; justify-content: space-between; align-items: center; font-family:'Floreste''>
    <p>${price} <sup>₽</sup></p>
      <div style='display: flex; align-items: center;'>
        <i class="fas fa-shopping-basket" style='margin-right: 5px; color:yellow'></i>
        <p>Купить</p>
    </div>
   
</div>
       
    `;
   
    contentDetails.appendChild(detailDiv);
});
    }
});