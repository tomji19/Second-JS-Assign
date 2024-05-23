const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Innovation distinguishes between a leader and a follower. – Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
  '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle." - Steve Jobs',
  '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
  '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most importantly, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." - Steve Jobs'
];

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
