import React from 'react'
import { Accordion, AccordionItemPanel } from 'react-accessible-accordion';
import { AccordionItemHeading } from 'react-accessible-accordion';
import { AccordionItem } from 'react-accessible-accordion';


const Forecast = ({ data }) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    <AccordionItem key={index}>
                        <AccordionItemHeading>

                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                })}

            </Accordion>
        </div>
    );
};

export default Forecast;