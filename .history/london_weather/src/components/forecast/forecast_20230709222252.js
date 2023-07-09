import React from "react";
import './forecast.css';
import {
    Accordion,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItem,
} from "react-accessible-accordion";


const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img
                                        src={`icons/${item.weather[0].icon}.png`}
                                        alt="weather"
                                        className="icon-small"
                                    />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">
                                        {item.weather[0].description}
                                    </label>
                                    <label className="min-max">
                                        {Math.round(item.main.temp_min)}°C /{" "}
                                        {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>;
                })}
            </Accordion>
        </div>
    );
};

export default Forecast;
