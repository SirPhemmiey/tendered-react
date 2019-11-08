import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
            <footer>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6">
              <span className="text-muted">Copyright © 2018 <a className="text-green" href="https://www.bootstrapdash.com/" target="_blank">Bootstrap Dash</a>. All rights reserved.</span>
            </div>
            <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6 d-flex justify-content-end">
              <span className="mt-0 text-right">Hand-crafted &amp; made with <i className="mdi mdi-heart text-red"></i></span>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}