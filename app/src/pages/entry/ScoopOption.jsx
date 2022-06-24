import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ScoopOption({ name, imagePath, updateItemCount }) {
  const [isValid, setIsValid] = useState(true);
  const handleChange = event => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);

    // make sure we're using a number and not a string to validate
    const currentValueFloat = parseFloat(currentValue);

    // validate
    setIsValid(
      0 <= currentValue &&
        currentValueFloat <= 10 &&
        Math.floor(currentValueFloat) === currentValueFloat
    );
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img src={`http://localhost:3030${imagePath}`} alt={`${name} scoop`} />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
            isInvalid={!isValid}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
