import React from "react";

function SearchSecond(props) {
    return (
        <div className="col col-sm-4">
            <input className="form-control" value={props.value} onChange={(event) => props.setSearchQuery(event.target.value)} placeholder="Type to search..."></input>
        </div>
    );
}

export default SearchSecond;
