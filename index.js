// <!-- Create 24 boxes with numbers from 1 to 24 -->
// Create an array of messages
// Luo taulukko viesteistä
let messages = [
  "Katso oman sängyn patjan väliin.",
  "Katso kirjahyllyyn punaisen kirjan taakse.",
  "Katso jääkaapin vihanneslaatikkoon.",
  "Katso kylpyhuoneen pesukonen taakse.",
  "Katso oman saapan sisälle.",
  "Katso sohvan tyynyjen väliin.",
  "Katso kukkaruukun.",
  "Katso keittiön 1. laatikko.",
  "Katso oman sängyn alle.",
  "Katso  oman vaatekaapin ylähyllylle.",
  "Katso hattuhyllylle.",
  "Katso oman takin taskuun.",
  "Katso kahvipurkin taakse.",
  "Katso saunan lavalle.",
  "Katso pyykkikoriin.",
  "Katso roskiksen taakse.",
  "Katso airfryeri sisälle.",
  "Katso astianpesukoneen sisään.",
  "Katso oman pipoon.",
  "Katso vintissä kynälaatikkoon.",
  "Katso olohuoneessa toinen laatikkoon.",
  "Katso tietokoneen näppäimistön alle.",
  "Katso pöytälamppuun alakerrassa.",
  "Katso pehmolelun sisään.",
];

for (let i = 1; i <= 24; i++) {
  let box = document.createElement("div");
  box.className = "box";
  box.innerHTML = i;
  box.onclick = function () {
    // Get the current date and the box number
    let date = new Date();
    let day = date.getDate();
    let number = parseInt(this.innerHTML);
    // Check if the box number is equal to the current date day
    if (number == day) {
      // Replace the box number with a message from the array
      this.innerHTML = messages[number - 1];
      // Add a class to the text for animation
      this.classList.add("text");
    }
  };
  document.getElementById("container").appendChild(box);
}
