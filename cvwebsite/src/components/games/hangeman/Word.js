import "./word.css"

function Word({selectedWord,currectLetters}){
    return(
        <div className="word">
            {selectedWord.split('').map((letter,i)=>{
                return (
                    <span className="letter" key={i}>
                        {currectLetters.includes(letter) ? letter: ""}
                    </span>
                )
            })}
        </div>
    )
}
export default Word;