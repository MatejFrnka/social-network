const DevelopersSaySection = () => {
    return (
        <section className="DevelopersSay" id="DevelopersSay">
            <h2 className="title">What Our Developers Say</h2>
            <div className="content">
                <div className="DevelopersSay-card">
                    <div className="DevelopersSay-image">
                        <img src="../images/background.jpg" alt="Developer" />
                    </div>
                    <div className="DevelopersSay-info">
                        <p className="DevelopersSay-category">Script writing</p>
                        <strong className="DevelopersSay-title">
                            <span>Script writing</span>
                            <a href="#" className="more-details">
                                More Details
                            </a>
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopersSaySection;