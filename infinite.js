document.addEventListener('DOMContentLoaded', () => {
  const puzzleContainer = document.getElementById('puzzle-container');
  let puzzleCount = 0;

  function createPuzzle() {
      puzzleCount++;
      const puzzle = document.createElement('div');
      puzzle.className = 'puzzle';

      const title = document.createElement('div');
      title.className = 'puzzle-title';
      title.innerText = `Puzzle ${puzzleCount}: The Unsolvable Molecule`;

      const content = document.createElement('div');
      content.className = 'puzzle-content';
      const puzzleText = generateWeirdChemistryContent();
      content.innerHTML = puzzleText;

      const downloadLink = document.createElement('a');
      downloadLink.className = 'download-link';
      downloadLink.href = createDownloadLink(puzzleText);
      downloadLink.download = `Puzzle_${puzzleCount}.txt`;
      downloadLink.innerText = 'Download Puzzle';

      puzzle.appendChild(title);
      puzzle.appendChild(content);
      puzzle.appendChild(downloadLink);
      puzzleContainer.appendChild(puzzle);
  }

  function generateWeirdChemistryContent() {
      const weirdConcepts = [
          "Imagine a molecule with 13 protons, 7 neutrons, and an extra electron for no reason.",
          "What if electrons orbited in a square? How would that affect covalent bonds?",
          "Create a compound with an atomic mass that is a prime number. Now explain why it doesn't exist.",
          "Design a crystal structure where all atoms repel each other equally.",
          "Propose a chemical reaction where the product is more unstable than the reactants.",
          "What if hydrogen bonds were stronger than covalent bonds? Predict the impact on water."
      ];
      const randomIndex = Math.floor(Math.random() * weirdConcepts.length);
      return weirdConcepts[randomIndex];
  }

  function createDownloadLink(text) {
      const blob = new Blob([text], { type: 'text/plain' });
      return URL.createObjectURL(blob);
  }

  // Create puzzles infinitely with a delay of 1 second
  setInterval(createPuzzle, 1000);
});
