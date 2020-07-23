import React from 'react'

export default ({ projectsLinks }) => {
    return (
        <section className="page-section bg-light" id="projects">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Projects</h2>
                    <h3 class="section-subheading text-muted">Stuff I did to impress recruiters!</h3>
                </div>
                <div className="row">
                    {projectsLinks && projectsLinks.map(({ title, projectLink, imgLink, caption }, index) =>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="projects-item">
                                <a className="projects-link" data-toggle="modal" href={projectLink}>
                                    <div className="projects-hover">
                                        <div className="projects-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={imgLink} alt="" />
                                </a>
                                <div className="projects-caption">
                                    <div className="projects-caption-heading">{title}</div>
                                    <div className="projects-caption-subheading text-muted">{caption}</div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}