const colors = [
    '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
    '#FFD700', '#FF69B4', '#00FFFF', '#7FFFD4',
    '#800080', '#FF4500', '#008080', '#00CED1',
    '#FF6347', '#DC143C'
];


function generateGradient(colors) {
    const selectedColors = colors.sort(() => Math.random() - 0.5).slice(0, 3);
    return `linear-gradient(90deg, ${selectedColors.join(', ')})`;
}

function changeBackground() {
    const gradient = generateGradient(colors);
    document.body.style.background = gradient;
}


const button = document.getElementById('gradientButton');
button.addEventListener('click', changeBackground);