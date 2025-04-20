import './style.css';


function Board({boxArray, toggle, titleRef, winLine}) {
	const getStrikeClass = pattern => {
		const patterns = {
			"0,1,2": "row-1",
			"3,4,5": "row-2",
			"6,7,8": "row-3",
			"0,3,6": "col-1",
			"1,4,7": "col-2",
			"2,5,8": "col-3",
			"0,4,8": "diag-main",
			"2,4,6": "diag-anti",
		};
		return patterns[pattern.join(',')];
	};
	
	return(
		<>
			<div className="board">
				<div className="row1">
					<div className="box" ref={boxArray[0]} onClick={e => toggle(e, 0)}></div>
					<div className="box" ref={boxArray[1]} onClick={e => toggle(e, 1)}></div>
					<div className="box" ref={boxArray[2]} onClick={e => toggle(e, 2)}></div>
				</div>
				<div className="row2">
					<div className="box" ref={boxArray[3]} onClick={e => toggle(e, 3)}></div>
					<div className="box" ref={boxArray[4]} onClick={e => toggle(e, 4)}></div>
					<div className="box" ref={boxArray[5]} onClick={e => toggle(e, 5)}></div>
				</div>
				<div className="row3">
					<div className="box" ref={boxArray[6]} onClick={e => toggle(e, 6)}></div>
					<div className="box" ref={boxArray[7]} onClick={e => toggle(e, 7)}></div>
					<div className="box" ref={boxArray[8]} onClick={e => toggle(e, 8)}></div>
				</div>
				{winLine && <div className={`strike strike-${getStrikeClass(winLine)}`}><div className="strike-line"></div></div>}
			</div>
		</>
	)
}

export default Board;