import React from "react";
import {
    Accordion,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItem,
} from "react-accessible-accordion";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    WEEK_DAYS.slice(dayInAWeek, WEEK);

    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                    <label className="day"></label>
                                </div>
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
