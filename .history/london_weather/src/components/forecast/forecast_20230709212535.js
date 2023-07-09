import React from "react";
import {
    Accordion,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItem,
} from "react-accessible-accordion";

const Forecast = ({ data }) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                .daily
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>;
                })}
            </Accordion>
        </div>
    );
};

export default Forecast;
