import "./abouth.css";
import va from "../../images/va.jpg"

function Abouth(){
    return(
        <div className="abouth">
            <div className="avatar">
            <img src={va} alt='vach' className="vache"/>
            </div>
            <div className="text">
                <h1>Vache Asatryan</h1>
                <p>Front End Developer</p>
                <p>25 years</p>
            </div>
        </div>
    )
}

export default Abouth;