import React from 'react';
import './contact.css';

const Contact = () => {

    const name = "Pierre";
    const avatar = "https://randomuser.me/api/portraits/men/45.jpg";
    const online = true;

    return (
        <div className="Contact">
            <img className="avatar" src={avatar}/>
            <div>
                <h4 className="name">{name}</h4>

            <div className="status">
                <div className = {online ? 'status-online' : 'status-offline'}></div>
                {online ? 'online' : 'offline'}
            </div>
            </div>
        </div>
    );
}

export default Contact;