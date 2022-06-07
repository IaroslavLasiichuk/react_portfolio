import '../../styles.css'
import '../../scripts'

function Form(){
    return(
        <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                    <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <h2 className="text-white mb-4"> Contact Me</h2>
                        <h4 className='text-white'>Would you like to contact me please fill out the info below and I will be in touch.</h4>
                        <div className="row input-group-newsletter">
                            <div className="row"><input className="form-control" id="name" type="text" placeholder="Enter your name..." aria-label="Enter your name..." data-sb-validations="required,name" /></div>
                            <div className="row"><input className="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                            <div className="row"><textarea className="form-control" id="textArea" type="text" placeholder="Enter your message..." aria-label="Enter your message..." data-sb-validations="required,message" /></div>
                            <div className="col-auto"><button className="btn btn-primary " id="submitButton" type="submit">Submit</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Form;