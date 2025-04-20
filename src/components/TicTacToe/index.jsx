import {useState, useRef} from 'react';

import Board from './Board.jsx';

import './style.css';

import crossIcon from '../../assets/img/cross.png';
import circleIcon from '../../assets/img/circle.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
	let [count, setCount] = useState(0);
	let [lock, setLock] = useState(false);
	let [winLine, setWinLine] = useState(null);
	let titleRef = useRef(null);
	let boxRef1 = useRef(null);
	let boxRef2 = useRef(null);
	let boxRef3 = useRef(null);
	let boxRef4 = useRef(null);
	let boxRef5 = useRef(null);
	let boxRef6 = useRef(null);
	let boxRef7 = useRef(null);
	let boxRef8 = useRef(null);
	let boxRef9 = useRef(null);
	
	let boxArray = [boxRef1, boxRef2, boxRef3, boxRef4, boxRef5, boxRef6, boxRef7, boxRef8, boxRef9];
	
	let toggle = (e, num) => {
		if(lock) {
			return 0;
		} else if(count % 2 === 1) {
			e.target.innerHTML = `<img src='${crossIcon}'/>`;
			data[num] = "x";
			setCount(++count);
		} else {
			e.target.innerHTML = `<img src='${circleIcon}'/>`;
			data[num] = "o";
			setCount(++count);
		}
		checkWin();
	};
	
	let checkWin = (board) => {
		let winPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		
		if (data.every(cell => cell !== "")) {
			titleRef.current.innerHTML = `It's a <span> Draw </span>!`;
			setLock(true);
		}
		
		for(let pattern of winPatterns) {
			const [a, b, c] = pattern;
			if(data[a] !== "" && data[a] === data[b] && data[b] === data[c]) {
				won(data[a], pattern);
				break;
			}
		}
	};
	
	let won = (winData, pattern) => {
		setLock(true);
		setWinLine(pattern);
		if(winData === "x") {
			titleRef.current.innerHTML = `Congratulations: <img src='${crossIcon}'/> Win`;
		} else {
			titleRef.current.innerHTML = `Congratulations: <img src='${circleIcon}'/> Win`;
		}
	};
	
	let reset = () => {
		setCount(0);
		setLock(false);
		setWinLine(null);
		titleRef.current.innerHTML = `Tic Tac Toe Game in <span> React </span>`;
		data = ["", "", "", "", "", "", "", "", ""];
		boxArray.map(e => {
			e.current.innerHTML = "";
		});
	};
	
	return(
		<>
			<div className="tic-tac-toe">
				<h1 ref={titleRef}> Tic Tac Toe Game in <span> React </span> </h1>
				<Board boxArray={boxArray} toggle={toggle} titleRef={titleRef} winLine={winLine} />
				<button onClick={e => reset()}> Reset </button>
			</div>
		</>
	)
}

export default TicTacToe;