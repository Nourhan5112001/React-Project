import Card from 'react-bootstrap/Card';
import "./CustomCard.css";

export function CustomCard({text ,color}) {
  return (
    <div id='card'>
        <Card style={{ width: '300px' ,height:'160px' ,backgroundColor: color }}>
        <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <Card.Text>
         {text}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}