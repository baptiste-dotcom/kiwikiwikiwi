const anecdotes = [
  "Coucou ! C'est Kiwi-maintenance ici, je suis occupé à vérifier mes sources, à très vite !"
];

document.getElementById("factButton").addEventListener("click", () => {
  const random = anecdotes[Math.floor(Math.random() * anecdotes.length)];
  document.getElementById("factDisplay").textContent = random;
});

document.getElementById("moreButton").addEventListener("click", () => {
  const bubble = document.getElementById("moreBubble");
  bubble.style.display = bubble.style.display === "none" ? "block" : "none";

});


