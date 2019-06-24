import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15172.976881411754!2d10.275933535870871!3d36.92082783470689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5e87a6cb8cd%3A0x367f9fa2e1690031!2sRamada+Plaza+by+Wyndham+Tunis!5e0!3m2!1sfr!2stn!4v1558825935912!5m2!1sfr!2stn" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>
                
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;