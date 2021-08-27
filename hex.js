const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", 
"D", "E", "F"];

// a typical hex value looks like // #f15025 (6 values)
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// Function to copy hex value to clipboard

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("HEX value sucessfully copied!");
  }