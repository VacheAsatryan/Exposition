import "./hangeman.css"
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import { useState, useEffect } from "react";

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;
console.log(selectedWord);



function Hangeman(){
const{playable, setPlayable} = useState(true);
const [currectLetters,setCurrectLetters] =useState([]);
const [wrongLetters,setWrongLetters]= useState([]);

useEffect(()=>{
    const handleKeydown = event =>{
        const {key,keyCode} = event;
       
            if ( playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
    
                if (selectedWord.includes(letter)) {
                    if (!currectLetters.includes(letter)) {
                       setCurrectLetters(currectLetters => [...currectLetters, letter])
                    } 
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } 
                }
            }
        
    }
    window.addEventListener('keydown',handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown)
    
},[currectLetters,wrongLetters,playable]);


    return(
        <div className="hangeman">
          <div className="game-container">
           <Figure/>
           <WrongLetters wrongLetters={wrongLetters}/>
           <Word selectedWord={selectedWord} currectLetters={currectLetters} />
          </div>
        </div>
    )
}
export default Hangeman;