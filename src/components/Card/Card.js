import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const img1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Blue_rock_thrush_%28male%29_at_Gamla_Nature_Reserve.jpg/320px-Blue_rock_thrush_%28male%29_at_Gamla_Nature_Reserve.jpg'
const CardExample = (props) => {
  return (
    <div className="col-sm">
      <Card>
        <CardImg style={{maxWidth:`320px`}} top src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardExample;