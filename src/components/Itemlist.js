import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button"

export default function Itemlist(props) {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        {props.nombretarea}
        <Button variant="danger" onClick={()=> props.borrarTareas(props.nombretarea)}>
          Borrar Tarea
        </Button>
      </ListGroup.Item>
    </>
  );
}
