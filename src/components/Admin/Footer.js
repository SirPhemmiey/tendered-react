import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
          <footer className="sticky-footer">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Your Website 2018</span>
            </div>
          </div>
        </footer>
        );
    }
}