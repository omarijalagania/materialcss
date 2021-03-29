import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';



const Search = () => {

    return(
        <section id="search" className="section section-search red lighten-2">
           <div className="container">
                <input type="search" placeholder="Search Something" />
           </div>
        </section>
    );
}

export default Search;