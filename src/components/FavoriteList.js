import React from "react";
import { ListGroup } from "react-bootstrap";

function FavoriteList(props) {
    return (
        <>
            <div>
                {props.recipe.map((r, i) => (
                    <ListGroup.Item className="image-container d-flex justify-content-start m-3">
                        <a href={r.href} target="_blank">
                            <h1>{r.title}</h1>
                        </a>

                        <span
                            onClick={() => {
                                props.removeFavorite(r);
                            }}
                        >
                            ❌
                        </span>
                    </ListGroup.Item>
                ))}
            </div>
        </>
    );
}

export default FavoriteList;
