import React from "react";
import { Card,CardTitle, CardText } from 'reactstrap';



 function CharacterList (props){
   console.log("character", props);
  return(
    <div className="names">
      <section>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Name:{props.person.name}</CardTitle>
        <CardText>Gender:{props.person.gender}</CardText>
      </Card>
      </section>
      </div>
  )
}

export default CharacterList;