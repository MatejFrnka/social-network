const KeyFeatures = () => {
    return (
        <section className="cards" id="KeyFeatures">
            <h2 className="title">Key Features</h2>
            <div className="content">
                <div className="card">
                    <div className="icon">
                        <i className="fa-regular fa-1"></i>
                    </div>
                    <div className="info">
                        <h3>Code Sharing</h3>
                        <p>Share your code snippets and projects with fellow developers. Get feedback and improve your skills.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-regular fa-2"></i>
                    </div>
                    <div className="info">
                        <h3>Collaborative Environment</h3>
                        <p>Collaborate on coding projects, work together on solving challenges, and learn from each other.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-regular fa-3"></i>
                    </div>
                    <div className="info">
                        <h3>Discover New Ideas</h3>
                        <p>Explore a world of coding-related content. Find inspiration, tutorials, and stay updated on industry trends.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;