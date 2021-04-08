import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Itemlist from "./Itemlist"

export default function Lista(props) {
  return (
    <>
      <ListGroup className='p-5'>
          {
              props.listaTareas.map((dato, indice) => <Itemlist nombretarea={dato} key={indice} borrarTareas={props.borrarTareas}></Itemlist>)
          }
      </ListGroup>
    </>
  );
}
