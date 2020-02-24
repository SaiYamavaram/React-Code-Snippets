import './SeasonDisplay.css'
import React from 'react';

const getSeason = (month, lat) => {
    if (lat < 0 && (month <= 2 || month > 8)) {
        return "summer"
    }
    else
        return "winter"
}

const seasonConfig = {
    'winter': {
        text: "Blurr it is chilling",
        icon: 'snowflake'
    },
    'summer': {
        text: "Let's hit the beach",
        icon: 'sun'
    }

}
const SeasonDisplay = (props) => {
    var month = new Date().getMonth()
    var season = getSeason(month, props.lat)
    const { text, icon } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon}  icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>

    )
}

export default SeasonDisplay;