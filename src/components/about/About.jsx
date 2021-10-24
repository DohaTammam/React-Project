import './About.scss'
const About=()=>{
    return(
        <div className="about p-3">
            <div className="personalImage">
                <img src="/images/DSC_0157.JPG"></img>
            </div>
            <div className="aboutContent">
                <p>Hello Everyone !...</p>
                <p>I'm doha tammam, I'am Front-End Developer,<br/> Graduted From ITI </p>
                <br/>
                <h5 className="text-danger fs-4 fw-bold">My Set Skills is:</h5>
                <ul>
                    <li>HTML</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>BOOTSTRAP</li>
                    <li>JAVASCRIPT</li>
                    <li>AJAX</li>
                    <li>ANGULAR</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                </ul>
            </div>
        </div>
    )
}
export {About}