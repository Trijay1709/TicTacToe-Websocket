"use client"
import Square from "@/components/square";
import Image from "next/image";
import { useState } from "react";
type CellValue = "empty" | "circle" | "cross";

const render = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
const state : CellValue[][] = [
  ["empty","empty","empty"],
  ["empty","empty","empty"],
  ["empty","empty","empty"]
] 
export default function Home() {
  const [gamestate,setGameState]=useState(state);
  const [currentPlayer, setCurrentPlayer] = useState<"circle" | "cross">("circle");
  const [finishedState, setFinishedState] = useState<boolean>(false);


  return (
    <>
      <div className=" w-full h-screen flex justify-center p-10">
        
        <div className=" w-[30rem]">
          <div className="w-full flex justify-between  text-3xl mb-4">
            <div className="bg-zinc-500 rounded-lg py-3 px-9">Circle</div>
            <div className="bg-zinc-500 rounded-lg py-3 px-9">Cross</div>
          </div>
          <h1 className=" bg-zinc-500 text-center text-5xl px-10 py-4 rounded-lg">
              Tic Tac Toe
          </h1>
          <div className="mt-9 w-full justify-center flex flex-wrap gap-5 lg:gap-5">
            {
              render.map((arr,index)=>
                arr.map((e,index1)=>{
                return (<Square
                   key={e}
                    rowid={index}
                    colid={index1}
                    Gamestate={setGameState} 
                    currentPlayer={currentPlayer} 
                    setCurrentPlayer={setCurrentPlayer}
                    setFinishedState={setFinishedState}
                    finishedState={finishedState}
                    />)
              }))
            }
          
          </div>
        </div>
      </div>
    </>
  );
      }