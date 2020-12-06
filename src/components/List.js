import React from "react";

const List = (props) => {
    return (
        <>
            {props.recipe.map((r, i) => (
                <div className="image-container d-flex justify-content-start m-3">
                    <a href={r.href} target="_blank">
                        <h1>{r.title}</h1>
                    </a>
                </div>
            ))}
        </>
    );
};

export default List;
