import '../../styles.css'
import logoPython from '../../assets/img/python.png'
import logoJs from '../../assets/img/js.png'
import logoReact from '../../assets/img/reactlogo.png'


function Projects(){
  return(
    // Projects
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
            {/* Featured Project Row */}
            <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src={logoPython} alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Python</h4>
                                    <p className="mb-0 text-white-50">Python is powerful... and fast;plays well with others;runs everywhere;is friendly  easy to learn;is Open.</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project One Row */}
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src={logoJs} alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">JavaScript</h4>
                                    <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Two Row */}
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src={logoReact} alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">React</h4>
                                    <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;