
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalFind');
    const openModalBtn = document.getElementById('openModal');
    const closeBtn = document.querySelector('.close');
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
function closeFind() {
    document.getElementById("modalFind").style.display = "none";
}

const elements = [
    
        { id: 1, photo: '../images/floorMirror/mirror1.png', name: 'напольные зеркала', quantity: '4шт' },
        { id: 2, photo: '../images/floorLamp/lamp5.png', name: 'торшеры и лампы', quantity: '4шт' },
        { id: 3, photo: '../images/armchairsСhairs/chair1.png', name: 'кресла и стулья', quantity: '4шт' },
        { id: 4, photo: '../images/tablesСabinets/tabel1.png', name: 'столы и тумбы', quantity: '4шт' },
    

        { id: 5, photo: '../images/floorMirror/sec.png', name: "Kristin", text: 'Напольное зеркало',color:'#A5D4FF', price: '150 000' },
        { id:  6, photo: '../images/floorMirror/third.png', name: "Arlene", text: 'Напольное зеркало',color:'#F0B3EA', price: '150 000' },
        { id: 7, photo: '../images/floorMirror/fourth.png', name: "Colleen", text: 'Напольное зеркало',color:'#8ECDFA', price: '150 000' },
        { id: 8, photo: '../images/floorMirror/fifth.png', name: "coppelia", text: 'Напольное зеркало',color:'#FBE4CA', price: '150 000' },
        { id: 9, photo: '../images/floorMirror/six.png', name: "artemide", text: 'Напольное зеркало',color:'#F0B5FA', price: '150 000' },

        { id: 10, photo: '../images/floorLamp/lamp1.png', name: "Aubrey", text: 'Лампа настольная',color:'#F0B5FA', price: '150 000' },
        { id:11, photo: '../images/floorLamp/lamp2.png', name: "Leslie", text: 'Лампа настольная',color:'#88E379', price: '`150 000' },
        { id: 12, photo: '../images/floorLamp/lamp3.png', name: "Darrell", text: 'Лампа настольная',color:'#FA8EEF', price: '150 000' },
        { id: 13, photo: '../images/floorLamp/lamp4.png', name: "Coppelia", text: 'Лампа настольная',color:'#29D0D9', price: '150 000' },
        { id: 14, photo: '../images/floorLamp/lamp5.png', name: "Artemide", text: 'Лампа настольная',color:'##89D5FF', price: '150 000' },
    


        { id: 15, photo: '../images/armchairsСhairs/ch1.png', name: "Kathryn", text: 'Зеркало напольное',color:'#FBE4CA', price: '150 000' },
        { id: 16, photo: '../images/armchairsСhairs/ch2.png', name: "Wendy", text: 'Зеркало напольное',color:'#F0B3EA', price: '150 000' },
        { id: 17, photo: '../images/armchairsСhairs/ch3.png', name: "Judith", text: 'Зеркало напольное',color:'#F18EFA', price: '150 000' },
        { id: 18, photo: '../images/armchairsСhairs/ch4.png', name: "Jane", text: 'Зеркало напольное',color:'#5C544A', price: '150 000' },
        { id: 19, photo: '../images/armchairsСhairs/ch5.png', name: "Darlene", text: 'Зеркало напольное',color:'#F0B5FA', price: '150 000' },

 
        { id: 20, photo: '../images/tablesСabinets/tabel1.png', name: "Kathryn", text: 'Зеркало напольное',color:'#A5D4FF', price: '150 000' },
        { id: 21, photo: '../images/tablesСabinets/table2.png', name: "Wendy", text: 'Зеркало напольное',color:'#F0DFB3', price: '150 000' },
        { id: 22, photo: '../images/tablesСabinets/table3.png', name: "Judith", text: 'Зеркало напольное',color:'#F88EFA', price: '150 000' },
        { id: 23, photo: '../images/tablesСabinets/table4.png', name: "Jane", text: 'Зеркало напольное',color:'#CACFFB', price: '150 000' },
        { id: 24, photo: '../images/tablesСabinets/table5.png', name: "Darlene", text: 'Зеркало напольное',color:'#F0B5FA', price: '150 000' }
   
];

// function performSearch() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase();

//     const matchingElements = elements.filter(element => element.name.toLowerCase().includes(searchTerm) || element.text.toLowerCase().includes(searchTerm));

//     let resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = '';

//     matchingElements.forEach(element => {
//         let elementDiv = document.createElement('div');
//         elementDiv.innerHTML = `
//             <img src=${element.photo}/>
//             <h3>${element.name}</h3>
//             <p>${element.text}</p>
//         `;
//         resultsContainer.appendChild(elementDiv);
//     });
// }

// function closeFind() {
//     document.getElementById('searchInput').value = '';
//     document.getElementById('searchResults').innerHTML = '';
// }