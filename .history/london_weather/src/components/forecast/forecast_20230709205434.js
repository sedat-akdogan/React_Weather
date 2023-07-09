import React from 'react'

const Forecast = ({data}) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion></Accordion>
        </div>
    );
};

export default Forecast;