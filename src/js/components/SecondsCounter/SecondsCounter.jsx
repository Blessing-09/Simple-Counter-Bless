    import React, { useState, useEffect } from "react";
    import { faClock } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import "./SecondsCounter.css";

    const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (seconds === 11) {
        alert("You have reached 10 seconds!");
        }
    }, [seconds]);

    useEffect(() => {
        const intervalValue = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        }, 1000);
        return () => clearInterval(intervalValue);
    }, []);

    const getSeconds = () => String(seconds % 60).padStart(2, "0");
    const getMinutes = () => String(Math.floor(seconds / 60)).padStart(2, "0");
    const getHours = () => String(Math.floor(seconds / 3600)).padStart(2, "0");

    return (
        <div className="container mt-5 text-center">
           
            <ul className="list p-0 ">
                <li> <FontAwesomeIcon className="glow" icon={faClock} size="2x" /></li>
                <li><span className="glow">{getHours()}</span></li>
                <li><span className="glow">:</span></li>
                <li><span className="glow">{getMinutes()}</span></li>
                <li><span className="glow">:</span></li>
                <li><span className="glow">{getSeconds()}</span> </li>
            </ul>
        </div>
    );
    };

    export default SecondsCounter;
