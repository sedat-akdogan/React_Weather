import React from 'react'
import { Accordion, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import {  } from 'react-accessible-accordion';
import { AccordionItem } from 'react-accessible-accordion';


const Forecast = ({ data }) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                })}

            </Accordion>
        </div>
    );
};

export default Forecast;