import React from "react";


const People = ({name, confirmed, recovered, Deaths}) => {
    return (
        <div>
        <h1 className = "country-name">{name}</h1>
        <div className = "detail"><p className = "confirmed"><span className = "con">Confirmed: </span>{confirmed}</p>
        <p className = "recovered"><span className = "rec">Recovered: </span>{recovered}</p>
        <p className = "deaths"><span className = "dec">Deaths: </span>{Deaths}</p></div>
        
    </div>
    )
    
}


export default People;


