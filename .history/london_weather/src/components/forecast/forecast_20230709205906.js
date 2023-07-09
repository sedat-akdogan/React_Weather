import React from 'react'
import { Accordion } from 'react-accessible-accordion';

const Forecast = ({data}) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice}
            </Accordion>
        </div>
    );
};

export default Forecast;