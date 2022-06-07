import '../../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    const adress = <FontAwesomeIcon icon={faAddressCard} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return(
        // <!-- Contact-->
        <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                           {adress}
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">23591 E5th Drive Aurora CO</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                               {mail}
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="#!">lasmant@yahoo.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                {phone}
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">+1 (720) 453-7334</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-linkedin"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    );
}
export default Contact;