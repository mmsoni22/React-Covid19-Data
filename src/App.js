import React, { useState, useEffect } from "react";
import People from "./visual"
import "./App.css"

const App = () => {

const [people, setPeople] = useState([]);
const [search ,setSearch] = useState('');
const [query, setQuery] = useState('united states of America')

useEffect(() => {
    getAPI();
},[query])

    const getAPI = async() => {
        const response = await fetch(`https://covid19-api.com/country?name=${query}`)
        const data = await response.json()
        console.log(data)
        setPeople(data)
    }
    const updateSearch = e => {
        setSearch(e.target.value)
    }
     
    const getSearch = e => {
        e.preventDefault()
        setQuery(search);
        setSearch('')
    }
    return (
    <div className = "App">
        <form className = "search-form" onSubmit = {getSearch}>
            <input className = "search-bar" value = {search} onChange = {updateSearch} type = "text" /> 
            <button className = "search-button" type  = "submit">Search</button>
        </form>
        <div>
            {people.map(peo => (
                <People
                        name = {peo.country}
                        confirmed = {peo.confirmed}
                        recovered = {peo.recovered}
                        Deaths = {peo.deaths}
                />
            ))}
        </div>
       
   </div>        
       

    )
}

export default App;