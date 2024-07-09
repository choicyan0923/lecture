// script.js
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
// 필요한 만큼 버튼 변수 추가

const infoDisplay = document.getElementById('info-display');

btn1.addEventListener('click', () => {
    infoDisplay.innerHTML = `
        <h2>버튼 1 클릭</h2>
        <p>버튼 1에 대한 정보를 여기에 추가하세요.</p>
    `;
});

btn2.addEventListener('click', () => {
    infoDisplay.innerHTML = `
        <h2>버튼 2 클릭</h2>
        <p>버튼 2에 대한 정보를 여기에 추가하세요.</p>
    `;
});

btn3.addEventListener('click', () => {
    infoDisplay.innerHTML = `
        <h2>버튼 3 클릭</h2>
        <p>버튼 3에 대한 정보를 여기에 추가하세요.</p>
    `;
});

// 필요한 만큼 버튼 클릭 이벤트 핸들러 추가
