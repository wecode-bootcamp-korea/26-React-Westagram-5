import { Component } from 'react';
import SideStory from './SideStory';
import SidePick from './SidePick';
import Footer from './footer';

export class Side extends Component {
  render() {
    return (
      <section id="side">
        <div className="side-account">
          <div className="account-img" />
          <div className="account-img-ex">
            <div>
              <p>wecode_bootcamp</p>
              <p>
                WeCode<span>위코드</span>
              </p>
            </div>
          </div>
        </div>
        <SideStory />
        <SidePick />
        <Footer />
      </section>
    );
  }
}

export default Side;
