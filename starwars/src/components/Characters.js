import React from "react";
import styled from "styled-components";

 function CharacterList (props){
  return(
    <div className="names">
      <section>
      <h3>Name:{props.name}</h3>
  <p>Gender:{props.gender}</p>
      </section>
      </div>
  )
}

export default CharacterList;