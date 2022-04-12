const wrapper = document.getElementById('wrapper');

function changeColor(){
    const col1 = getRandomRBG();
    const col2 = getRandomRBG();
    const col3 = getRandomRBG();

    const colString = `rgb(${col1}, ${col2}, ${col3})`;
    wrapper.style.background = colString;
};

window.addEventListener('load', () => {
    (setTimeout(() => {
        changeColor();
    }),300);
})

function getRandomRBG(){
    return Math.floor(Math.random()*256);
}