
import { useState } from "react"
import "./tictac.css"

function Tictac(){
    const [turn,SetTurn] = useState('x');
    const [cells,SetCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();


    const checkforWinner = (squares) =>{
        let combos ={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            dignol:[
                [0,4,8],
                [2,4,6]
            ]
        };
        for(let combo in combos){
      combos[combo].map((patern)=>{
        if(squares[patern[0]] === '' ||
         squares[patern[1]] === '' ||
          squares[patern[2]] === ''){

          }else if(
             squares[patern[0]] === squares[patern[1]] &&
            squares[patern[1]] === squares[patern[2]]
            ){
                setWinner(squares[patern[0]] )

          }
      })
        }
    };

    const Handleclick=(num)=>{
        if(cells[num] !== ''){
            alert('alredy clicket');
            return;
        }
        let squares = [...cells];
        if(turn === 'x'){
            squares[num] = 'x';
            SetTurn("o")
        }else{
            squares[num] = 'o';
            SetTurn('x')
        }
        checkforWinner(squares)
        SetCells(squares);
    }
    const handlerestart=()=>{
        setWinner(null);
        SetCells(Array(9).fill(''))
    }
    const Cell = ({num}) =>{
        return <td onClick={()=> Handleclick(num)}> {cells[num]}</td>
    }
    return(
        <div className="tictac">
            <table >
               <p className="winner"> Turn: {' '} {turn}</p>
                <tbody >
                    <tr>
                        <Cell num ={0}/>
                        <Cell num ={1}/>
                        <Cell num ={2}/>
                    </tr>
                    <tr>
                        <Cell num ={3}/>
                        <Cell num ={4}/>
                        <Cell num ={5}/>
                    </tr>
                    <tr>
                        <Cell num ={6}/>
                        <Cell num ={7}/>
                        <Cell num ={8}/>
                    </tr>
                </tbody>
            </table>
                {winner && (
                    <>
                    <p className="winner">{winner} is the Winner!</p>
                    <button onClick={()=>handlerestart()}>play agin</button>
                    </>
                )}
        </div>
    )
}

export default Tictac;