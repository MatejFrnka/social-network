const ContactSection = () => {
    return (
        <section className="cards contact" id="contact">
            <h2 className="title">Get In Touch</h2>
            <div className="content">
                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="info">
                        <h3>phone</h3>
                        <p>+42000000000</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="info">
                        <h3>email</h3>
                        <p>GA@GA.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;