import React from "react";
import PropTypes from 'prop-types';
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : false
    }
  }
  
  render () {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status">
            <div 
            className= {this.state.online ? 'status-online' : 'status-offline'}
            />
            <p className="status-text" 
              onClick={event => {
                const isOnline = !this.state.online;
                this.setState({ online: isOnline});
              }}
            >
              {this.state.online ? 'Online' : 'Offline'}</p>
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
