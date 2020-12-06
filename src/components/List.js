import React from "react";
import { Badge, Button, ListGroup, Image } from "react-bootstrap";

function List(props) {
    return (
        <>
            <div>
                <Button
                    variant="outline-success"
                    onClick={() => {
                        props.setExplain(!props.explain);
                    }}
                >
                    Picture + ingredients
                </Button>
                {props.recipe.map((r, i) => (
                    <ListGroup.Item className="image-container d-flex justify-content-start m-3">
                        <a href={r.href} target="_blank">
                            <h1>{r.title}</h1>
                        </a>

                        <span
                            onClick={() => {
                                props.addFavorite(r);
                            }}
                        >
                            👍
                        </span>

                        {props.explain === true ? (
                            <div style={{ position: "relative" }}>
                                <Image src={r.thumbnail} alt="no picture" roundedCircle />
                                <br />
                                <Badge variant="secondary" style={{ fontSize: "15px" }}>
                                    {r.ingredients}
                                </Badge>
                            </div>
                        ) : null}
                    </ListGroup.Item>
                ))}
            </div>
        </>
    );
}

export default List;
