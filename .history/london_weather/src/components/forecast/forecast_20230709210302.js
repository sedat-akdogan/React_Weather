import React from 'react'
import { Accordion, AccordionItemPanel } from 'react-accessible-accordion';
import { AccordionItemHeading } from 'react-accessible-accordion/dist/types/components/AccordionItemHeading';

const Forecast = ({data}) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, indx) => {
                    <AccordionItem></AccordionItem>
                    <AccordionItemHeading></AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                })}
                
            </Accordion>
        </div>
    );
};

export default Forecast;