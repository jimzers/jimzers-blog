import React, { Component } from "react";
import './page.scss';

class Home extends Component {
    render() {
        return (
            <div className={"page-container"}>
                <h2>Home</h2>
                <p>Welcome to my blog! My name is Adam Lee, and I love machine learning and web development! I especially like deep learning and its applications to reinforcement learning and generative models. Some research interests of mine include multi-agent reinforcement learning, safe reinforcement learning, and sampling efficiency in reinforcement learning!</p>
            </div>
        );
    }
}

export default Home;