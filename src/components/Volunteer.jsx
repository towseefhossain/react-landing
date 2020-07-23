import React from 'react'

export default ({ volunteerRoles }) => {
    return (
        <section className="page-section bg-light" id="volunteering">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Volunteering</h2>
                    <h3 className="section-subheading text-muted">Spaces I've contributed to</h3>
                </div>
                <div className="row">
                    {volunteerRoles && volunteerRoles.map(({ org, role, date, imgLink }, index) =>
                        <div className="col-lg-3">
                            <div className="team-member">
                                <img className="mx-auto" src={imgLink} alt="" width='75px' />
                                <p className="date" style={{ paddingTop: '5px' }}>{date}</p>
                                <h4 style={{ marginTop: '-50px' }}>{org}</h4>
                                <p className="text-muted">{role}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}