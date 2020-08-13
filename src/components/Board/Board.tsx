import React from 'react';
import './BoardStyles.css';
import Square from './Square/Square';

function Board(props:any) {

  //Todo: Get this from redux
  const board = [1,2,3,4,5,6,7,8,9]
  return (
    <div id="board" className="mt-4 d-flex flex-wrap">
      {
        board.map((el, i) => <Square key={i} />)
      }
    </div>
  )
}

export default Board;