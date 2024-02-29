// "use client"
import { CellValue } from '@/utils/cellType';
import React, { useState } from 'react'
interface GameSquareProps{
    rowid:number,
    colid:number,
    Gamestate:any,
    setCurrentPlayer:any,
    currentPlayer:"circle"|"cross",
    setFinishedState:any,
    finishedState:boolean

}
const circleSvg = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
  
  const crossSvg = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M19 5L5 19M5.00001 5L19 19"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
  
  const Square = ({rowid,colid,Gamestate,currentPlayer,setCurrentPlayer,finishedState,setFinishedState}:GameSquareProps) => {
    const onSquareClick = ()=>{
        if(!icon){
            if(currentPlayer==="circle"){

                setIcon(circleSvg);
                // setCurrentPlayer("cross")
            }
            else{
                setIcon(crossSvg);
                // setCurrentPlayer("circle")
            }
            Gamestate((prevstate:CellValue[][])=>{
              const newState = [...prevstate];
              console.log(colid,rowid);
              newState[rowid][colid]=currentPlayer;
              console.log(newState);
              
              return newState;
            })
            
            if(currentPlayer==="circle"){

                // setIcon(circleSvg);
                setCurrentPlayer("cross")
            }
            else{
                // setIcon(crossSvg);
                setCurrentPlayer("circle")
            }
            
            

        }
    }

    const [icon,setIcon]:any=useState(null);
  return (
    <div onClick={onSquareClick} className='h-20 w-20 lg:h-36 lg:w-36 hover:cursor-pointer bg-zinc-500 rounded-lg flex'>
        {icon}
    </div>
  )
}

export default Square