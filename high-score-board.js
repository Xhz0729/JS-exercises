// // <reference path="./global.d.ts" />
// // @ts-check

// /**
//  * Creates a new score board with an initial entry.
//  *
//  * @returns {Record<string, number>} new score board
//  */
function createScoreBoard() {
  const scoreBoard = {
    'The Best Ever': 1000000
  }
  return scoreBoard;
}

console.log(createScoreBoard()); // returns an object with one initial entry
// /**
//  * Adds a player to a score board.
//  *
//  * @param {Record<string, number>} scoreBoard
//  * @param {string} player
//  * @param {number} score
//  * @returns {Record<string, number>} updated score board
//  */
function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373)); // => {'Dave Thomas': 0, 'José Valim': 486373}

// /**
//  * Removes a player from a score board.
//  *
//  * @param {Record<string, number>} scoreBoard
//  * @param {string} player
//  * @returns {Record<string, number>} updated score board
//  */
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas')); // => {}

console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras')); // => { 'Dave Thomas': 0 })

// /**
//  * Increases a player's score by the given amount.
//  *
//  * @param {Record<string, number>} scoreBoard
//  * @param {string} player
//  * @param {number} points
//  * @returns {Record<string, number>} updated score board
//  */
function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player] + points;
  return scoreBoard;
}
console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73)); // => {"Freyja Ćirić", 12771081}

// /**
//  * Applies 100 bonus points to all players on the board.
//  *
//  * @param {Record<string, number>} scoreBoard
//  * @returns {Record<string, number>} updated score board
//  */
function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100;
  }
  return scoreBoard;
}
const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

console.log(applyMondayBonus(scoreBoard));// => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }

// /**
//  * Normalizes a score with the provided normalization function.
//  *
//  * @param {Params} params the parameters for performing the normalization
//  * @returns {number} normalized score
//  */
function normalize(score) {
  return 2 * score + 10;
}

function normalizeScore(params) {
   let val = params['score']
   return normalize(val);

}
const params = { score: 400, normalizeFunction: normalize };
console.log(normalizeScore(params)); // => 810

