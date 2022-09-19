import "./cvbody.css";
import Modal from "../../modal/Modal";
import Abouth from "../abouth/Abouth";
import Educations from "../educations/Educations";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Languages from "../languages/Languages";
import Contact from "../contact/Contact";
import { useState } from "react";

function Cvbody(){

    const [modalAbouth, setModalAbouth] = useState(false)
    const [modalEducations, setModalEducations] = useState(false)
    const [modalExperience, setModalExperience] =useState(false)
    const [modalMySkills,setModalMySkills] =useState(false)
    const [modalLanguages, setModalLanguages] =useState(false)
    const [modalContact,setModalContact] = useState(false)


    function abouth(){
        setModalEducations(false)
        setModalExperience(false)
        setModalMySkills(false)
        setModalLanguages(false)
        setModalContact(false)
        setModalAbouth(true)
    }
    function educations(){
        setModalAbouth(false)
        setModalExperience(false)
        setModalMySkills(false)
        setModalLanguages(false)
        setModalContact(false)
        setModalEducations(true)
    }
    function experience(){
        setModalAbouth(false)
        setModalEducations(false)
        setModalMySkills(false)
        setModalLanguages(false)
        setModalContact(false)
        setModalExperience(true)
    }
    function skills(){
        setModalAbouth(false)
        setModalEducations(false)
        setModalExperience(false)
        setModalLanguages(false)
        setModalContact(false)
        setModalMySkills(true)
    }
    function languages(){
        setModalAbouth(false)
        setModalEducations(false)
        setModalExperience(false)
        setModalMySkills(false)
        setModalContact(false)
        setModalLanguages(true)
    }
    function contact(){
        setModalAbouth(false)
        setModalEducations(false)
        setModalExperience(false)
        setModalMySkills(false)
        setModalLanguages(false)
        setModalContact(true)
    }


    return(
        <div className="body">
        <div className="body-header">
            <button onClick={abouth} className="bt"><span className="icon-address-book"></span></button>
            <button onClick={educations} className="bt"><span className="icon-education"></span></button>
            <button onClick={experience} className="bt"><span className="icon-hammer"></span></button>
            <button  onClick={skills} className="bt"><span className="icon-skillshare"></span> </button>
            <button onClick={languages} className="bt"><span className="icon-language" ></span></button>
            <button onClick={contact} className="bt"><span className="icon-phone" ></span></button>
        </div>
        <div className="modals">
            <Modal  active={modalAbouth} setactive={setModalAbouth}>
                <Abouth/>
            </Modal>
            <Modal  active={modalEducations} setactive={setModalEducations}>
             <Educations/>   
            </Modal> 
            <Modal  active={modalExperience} setactive={setModalExperience}>
                <Experience/>
            </Modal>
            <Modal  active={modalMySkills} setactive={setModalMySkills}>
                <Skills/>
            </Modal>
            <Modal  active={modalLanguages} setactive={setModalLanguages}>
                <Languages/>
            </Modal>
            <Modal  active={modalContact} setactive={setModalContact}>
                <Contact/>
            </Modal>

        </div>
    </div>
    )
}

export default Cvbody;