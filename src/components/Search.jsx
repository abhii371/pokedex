//pokemon search button
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function Search({getPokemon}) {
    const [search,setSearch] = useState('');
  return (
    <Container className='my-3'>
        <Form>
            <Row className="justify-content-center">
                <Col sm ="6" xs='9' md={4}>
                    <Form.Control placeholder="Search pokemon here"  
                    onChange={(e) => setSearch(e.target.value)} />
                </Col>
                <Col sm="3" xs='3' md={2} className="justify-content-center">
                    <Button block variant="warning" onClick={()=>{getPokemon(search)}}>Search</Button>
                </Col>
            </Row>
        </Form>
    </Container>   
  )
}
