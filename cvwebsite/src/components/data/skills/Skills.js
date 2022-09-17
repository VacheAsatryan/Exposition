import "./skills.css";

function Skills(){
    return(
        <div className="skills">
            <div className="top">
                <div className="tops"> <span className="icon-html5"> </span> <p>Html5</p></div>
                <div className="tops"> <span className="icon-css3"> </span> <p>Css 3</p></div>
                <div className="tops"><span className="icon-sass"> </span> <p>Sass</p></div>
            </div>
            <div className="top">
                <div className="centers"><span className="icon-javascript"> </span> <p>JavaScript</p></div>
                <div className="centers"><span className="icon-react"> </span> <p>React Js</p></div>
                <div className="centers"><span className="icon-nodemon"> </span> <p>Node JS</p></div>

            </div>
            <div className="top">
                <div className="bottoms"><span className="icon-redux"> </span> <p>Redux</p></div>
                <div className="bottoms"><span className="icon-mongodb"> </span> <p>Mongodb</p></div>
                <div className="bottoms"><span className="icon-github"> </span> <p>Github</p></div>

            </div>
        </div>
    )
}
export default Skills;