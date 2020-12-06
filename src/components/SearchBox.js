import React from "react";

function SearchBox(props) {
    return (
        <div className="col col-sm-4">
            <input className="form-control" value={props.value} onChange={(event) => props.setSearchingredients(event.target.value)} placeholder="ingredients to search..."></input>
        </div>
    );
}

export default SearchBox;
