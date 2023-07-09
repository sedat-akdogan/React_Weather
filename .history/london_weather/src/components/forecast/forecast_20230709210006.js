import React from 'react'
import { Accordion } from 'react-accessible-accordion';

const Forecast = ({data}) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, indx) => {

                })}
                Accordion
            </Accordion>
        </div>
    );
};

export default Forecast;