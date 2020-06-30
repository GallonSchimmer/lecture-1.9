// Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.

// Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0
// Notes
// Inputs will be numbers greater than or equal to 0.

// estas son las mías - My solutions

function footballPoints (wins, draws, losses) {
  const won = wins + 3
  const drawn = draws + 1
  const losen = losses
  return (won, drawn, losen)
};
footballPoints()

// FAILED: Expected: 5, instead got: 3
// FAILED: Expected: 20, instead got: 5
// FAILED: Expected: 3, instead got: 0
// FAILED: Expected: 7, instead got: 0
// FAILED: Expected: 0, instead got: 15

// dice que footBallPoints is not defined en el edabit
// en la console aparece el valor de losses solo ej:
// footballPoints (6, 8, 9)  resultado 9 (9 losses creo)

function footballpoints (wins, draws, losses) {
  const won = wins * 3
  const drawn = draws * 1
  const losen = losses
  return (won, drawn, losen)
};
footballpoints()

function footballPoints (wins, draws, losses) {
  if (wins <= 0, draws <= 0, losses <= 0) {
    return ((wins * 3) + (draws * 1) + (losses * 0))
  }
};
footballPoints()
//FAILED: Expected: 5, instead got: undefined
//FAILED: Expected: 20, instead got: undefined
//Test Passed: Value == 3
//Test Passed: Value == 7
//FAILED: Expected: 0, instead got: undefined


function footballPoints(wins, draws, losses) {
	 if (wins <= 0, draws <= 0) {
    return ((wins * 3) + (draws * 1))
  }
}
footballPoints()
//FAILED: Expected: 5, instead got: undefined
//FAILED: Expected: 20, instead got: undefined
//Test Passed: Value == 3
//FAILED: Expected: 7, instead got: undefined
//Test Passed: Value == 0




// Edabits solutions examples

function footballPoints(wins, draws, losses) {
	return (wins * 3 ) + (draws * 1) + (losses * 0);
}

function footballPoints(wins, draws, losses) {
		return wins*3 + draws;
}

const footballPoints = (a,b,c)=> a*3+b;

function footballPoints(wins, draws, losses) {
	let points = (wins * 3) + draws;
	return points;
}

function footballPoints(wins, draws, losses) {
	return (wins*3)+(draws*1)+(losses-losses);
}

function footballPoints(wins, draws, losses) {
	let totalScore = (wins * 3) + draws;
	return totalScore;
}

function footballPoints(wins, draws, losses) {
	return ((wins*3)+(draws*1))
}
