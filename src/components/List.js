import React from "react";

function List(props) {
    return (
        <>
            {props.recipe.map((r, i) => (
                <div className="image-container d-flex justify-content-start m-3">
                    <a href={r.href} target="_blank">
                        <h1>{r.title}</h1>
                    </a>
                    <button
                        onClick={() => {
                            props.setExplain(!props.explain);
                        }}
                    >
                        Explain
                    </button>
                    {props.explain === true ? (
                        <div>
                            <img src={r.thumbnail} alt="no picture" />
                            <p>ingredients: {r.ingredients}</p>
                        </div>
                    ) : null}
                </div>
            ))}
        </>
    );
}

export default List;
