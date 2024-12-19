import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






function CardC({description,name,price}) {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> 
          {description}    
        </Card.Text>
        <Card.Text>
          {`${price} $`}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}


export default CardC;
