// Code your solutions in this file
const cardNames = ["Guadalupe", "Ollie", "Aki"];

//1.
function writeCards(cardNames) {
  const thankYouMessages = [];
  for (let i = 0; i < cardNames.length; i++) {
    thankYouMessages.push(
      `Thank you, ${cardNames[i]}, for the wonderful surprise gift!`
    );
  }
  return thankYouMessages;
}

const thankYouMessages = writeCards(cardNames);
console.log(thankYouMessages); // Output the array of thank you messages

//2.
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

//call the function
countDown(10);
