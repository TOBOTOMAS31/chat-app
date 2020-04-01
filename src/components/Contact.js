import React from "react";
import PropTypes from 'prop-types';
import "./contact.css";

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status">
            <div className= {this.props.online ? 'status-online' : 'status-offline'} />
            <p className="status-text">{this.props.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
      </div>
  )};
}

Contact.propTypes = {
  name : PropTypes.string,
  avatar : PropTypes.string,
  online : PropTypes.bool,
}


export default Contact;
