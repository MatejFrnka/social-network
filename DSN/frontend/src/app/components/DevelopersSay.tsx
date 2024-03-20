import Image from 'next/image'
const DevelopersSay = () => {
    return (
        <section className="DevelopersSay" id="DevelopersSay">
            <h2 className="title">What Our Developers Say</h2>
            <div className="content">
                <div className="DevelopersSay-card">
                    <div className="DevelopersSay-image">
                    </div>
                    <div className="DevelopersSay-info">
                        <p className="DevelopersSay-category"></p>
                        <strong className="DevelopersSay-title">
                            <span>Script writing</span>
                            <a href="#more-details" className="more-details">
                                More Details
                            </a>
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopersSay;