import '../../styles.css'
import '../../scripts'
import logoJs from '../../assets/img/js.png'

function About(){
    return(
// About
<section className="about-section text-center" id="about">
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
                <h2 className="text-white mb-4">Hi there! I'm Front end Developer!!!</h2>
                <p className="text-white-50">
                Hi! My name is Iaroslav Lasiichuk. I am a hard working, punctual and honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, and have a good sense of humor. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.
                </p>
            </div>
        </div>
        <img className="img-fluid" src={logoJs} alt="logo-javascript" />
    </div>
</section>   
    );
}
export default About;

