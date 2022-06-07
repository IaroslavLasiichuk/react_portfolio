import '../../styles.css'
import '../../scripts'

function Header(){
    return(
<div>
{/* Masthead */}
        <header className="masthead" id='main'>
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Hi, my name is Iaroslav</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Welcome to my personal website I'm frontend developer.</h2>
                        <a className="btn btn-primary" href="#signup">Contact Me</a>
                    </div>
                </div>
            </div>
        </header>
</div>
    );
}
export default Header;