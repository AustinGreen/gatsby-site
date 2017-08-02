import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class About extends Component {
  constructor() {
    super();
    this.state = { count: 0 };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(direction) {
    this.setState(prevState => ({ count: prevState.count + direction }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Helmet title="About | Artivest" />
        <h1>Counter</h1>
        <p>
          current count: {count}
        </p>
        <button onClick={() => this.updateCount(1)}>plus</button>
        <button onClick={() => this.updateCount(-1)}>minus</button>
        <Link to="/">Go back home</Link>
      </div>
    );
  }
}

export default About;
