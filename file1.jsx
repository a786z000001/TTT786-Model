import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ isNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext%4===0) {nextSquares[i]='A';} 
    else if(isNext%4===1){nextSquares[i]='B';}
    else if(isNext%4===2){nextSquares[i]='C';}
    else {if(isNext%4===3){nextSquares[i] = 'D';}
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' +
      (isNext%4==0  || isNext%4==1)?(isNext%4==0?'A':'B'):(isNext%4==2?'C':'D');
  }

  return (
    <> 
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        
      </div>
  <div className="board-row">
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
        <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
        <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
      </div>
       <div className="board-row">
        <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
        <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
        <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
        <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
        <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
        <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
        <Square value={squares[25]} onSquareClick={() => handleClick(25)} />
        <Square value={squares[26]} onSquareClick={() => handleClick(26)} />
      </div>
       <div className="board-row">
        <Square value={squares[27]} onSquareClick={() => handleClick(27)} />
        <Square value={squares[28]} onSquareClick={() => handleClick(28)} />
        <Square value={squares[29]} onSquareClick={() => handleClick(29)} />
        <Square value={squares[30]} onSquareClick={() => handleClick(30)} />
        <Square value={squares[31]} onSquareClick={() => handleClick(31)} />
        <Square value={squares[32]} onSquareClick={() => handleClick(32)} />
        <Square value={squares[33]} onSquareClick={() => handleClick(33)} />
        <Square value={squares[34]} onSquareClick={() => handleClick(34)} />
        <Square value={squares[35]} onSquareClick={() => handleClick(35)} />
      </div>
       <div className="board-row">
        <Square value={squares[36]} onSquareClick={() => handleClick(36)} />
        <Square value={squares[37]} onSquareClick={() => handleClick(37)} />
        <Square value={squares[38]} onSquareClick={() => handleClick(38)} />
        <Square value={squares[39]} onSquareClick={() => handleClick(39)} />
        <Square value={squares[40]} onSquareClick={() => handleClick(40)} />
        <Square value={squares[41]} onSquareClick={() => handleClick(41)} />
        <Square value={squares[42]} onSquareClick={() => handleClick(42)} />
        <Square value={squares[43]} onSquareClick={() => handleClick(43)} />
        <Square value={squares[44]} onSquareClick={() => handleClick(44)} />
      </div>
       <div className="board-row">
        <Square value={squares[45]} onSquareClick={() => handleClick(45)} />
        <Square value={squares[46]} onSquareClick={() => handleClick(46)} />
        <Square value={squares[47]} onSquareClick={() => handleClick(47)} />
        <Square value={squares[48]} onSquareClick={() => handleClick(48)} />
        <Square value={squares[49]} onSquareClick={() => handleClick(49)} />
        <Square value={squares[50]} onSquareClick={() => handleClick(50)} />
        <Square value={squares[51]} onSquareClick={() => handleClick(51)} />
        <Square value={squares[52]} onSquareClick={() => handleClick(52)} />
        <Square value={squares[53]} onSquareClick={() => handleClick(53)} />
      </div>
       <div className="board-row">
        <Square value={squares[54]} onSquareClick={() => handleClick(54)} />
        <Square value={squares[55]} onSquareClick={() => handleClick(55)} />
        <Square value={squares[56]} onSquareClick={() => handleClick(56)} />
        <Square value={squares[57]} onSquareClick={() => handleClick(57)} />
        <Square value={squares[58]} onSquareClick={() => handleClick(58)} />
        <Square value={squares[59]} onSquareClick={() => handleClick(59)} />
        <Square value={squares[60]} onSquareClick={() => handleClick(60)} />
        <Square value={squares[61]} onSquareClick={() => handleClick(61)} />
        <Square value={squares[62]} onSquareClick={() => handleClick(62)} />
      </div>
       <div className="board-row">
        <Square value={squares[63]} onSquareClick={() => handleClick(63)} />
        <Square value={squares[64]} onSquareClick={() => handleClick(64)} />
        <Square value={squares[65]} onSquareClick={() => handleClick(65)} />
        <Square value={squares[66]} onSquareClick={() => handleClick(66)} />
        <Square value={squares[67]} onSquareClick={() => handleClick(67)} />
        <Square value={squares[68]} onSquareClick={() => handleClick(68)} />
        <Square value={squares[69]} onSquareClick={() => handleClick(69)} />
        <Square value={squares[70]} onSquareClick={() => handleClick(70)} />
        <Square value={squares[71]} onSquareClick={() => handleClick(71)} />
      </div>
       <div className="board-row">
        <Square value={squares[72]} onSquareClick={() => handleClick(72)} />
        <Square value={squares[73]} onSquareClick={() => handleClick(73)} />
        <Square value={squares[74]} onSquareClick={() => handleClick(74)} />
        <Square value={squares[75]} onSquareClick={() => handleClick(75)} />
        <Square value={squares[76]} onSquareClick={() => handleClick(76)} />
        <Square value={squares[77]} onSquareClick={() => handleClick(77)} />
        <Square value={squares[78]} onSquareClick={() => handleClick(78)} />
        <Square value={squares[79]} onSquareClick={() => handleClick(79)} />
        <Square value={squares[80]} onSquareClick={() => handleClick(80)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(81).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isNext = currentMove % 4;

  
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isNext={isNext} squares={currentSquares} onPlay={handlePlay} />

        
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2,3,4],[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8],
  [9,10,11,12,13],[10,11,12,13,14],[11,12,13,14,15],[12,13,14,15,16],[13,14,15,16,17],
    [18,19,20,21,22],[19,20,21,22,23],[20,21,22,23,24],[21,22,23,24,25],[22,23,24,25,26],
    [27,28,29,30,31],[28,29,30,31,32],[29,30,31,32,33],[30,31,32,33,34],[31,32,33,34,35],
    [36,37,38,39,40],[37,38,39,40,41],[38,39,40,41,42],[39,40,41,42,43],[40,41,42,43,44],
    [45,46,47,48,49],[46,47,48,49,50],[47,48,49,50,51],[48,49,50,51,52],[49,50,51,52,53],
    [54,55,56,57,58],[55,56,57,58,59],[56,57,58,59,60],[57,58,59,60,61],[58,59,60,61,62],
    [63,64,65,66,67],[64,65,66,67,68],[65,66,67,68,69],[66,67,68,69,70],[67,68,69,70,71],
    [72,73,74,75,76],[73,74,75,76,77],[74,75,76,77,78],[75,76,77,78,79],[76,77,78,79,80],
    [0,9,18,27,36],[9,18,27,36,45],[18,27,36,45,54],[27,36,45,54,63],[36,45,54,63,72],
    [1,10,19,28,37],[10,19,28,37,46],[19,28,37,46,55],[28,37,46,55,64],[37,46,55,64,73],
    [2,11,20,29,38],[11,20,29,38,47],[20,29,38,47,56],[29,38,47,56,65],[38,47,56,65,74],
    [3,12,21,30,39],[12,21,30,39,48],[21,30,39,48,57],[30,39,48,57,66],[39,48,57,66,75],
    [4,13,22,31,40],[13,22,31,40,49],[22,31,40,49,58],[31,40,49,58,67],[40,49,58,67,76],
    [5,14,23,32,41],[14,23,32,41,50],[23,32,41,50,59],[32,41,50,59,68],[41,50,59,68,77],
    [6,15,24,33,42],[15,24,33,42,51],[24,33,42,51,60],[33,42,51,60,69],[42,51,60,69,78],
    [7,16,25,34,43],[16,25,34,43,52],[25,34,43,52,61],[34,42,52,61,70],[43,52,61,70,79],
    [8,17,26,35,44],[17,26,35,44,53],[26,35,44,53,62],[35,44,53,62,71],[44,53,62,71,80],
    [0,10,20,30,40],[10,20,30,40,50],[20,30,40,50,60],[30,40,50,60,70],[40,50,60,70,80],
    [8,16,24,32,40],[16,24,32,40,48],[24,32,40,48,56],[32,40,48,56,64],[40,48,56,64,72]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c,d,e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
       && squares[a]==squares[d]&& squares[a]==squares[e]) {
      return squares[a];
    }
  }
  return null;
}

