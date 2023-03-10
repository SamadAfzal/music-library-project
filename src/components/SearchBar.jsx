import { useState } from 'react'
import { searchContext } from '../context/SearchContext'

function SearchBar(props){
    // We can comment out our searchTerm state variable as we are not using it!
    // let [searchTerm, setSearchTerm] = useState('')

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}


export default SearchBar
