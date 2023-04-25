import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PokemonData(props) {
  return (
    <Container className='mt-2'>
       <Row className="justify-content-center">
           <Col xs={12} sm={9} md={6}>
               <Card>
                   <Card.Header >
                       <h1>{props.name}</h1>
                       <img src={props.sprites} alt={props.name} />
                   </Card.Header>
                   <Card.Body>
                       <h2>Abilities</h2>
                       {props.abilities.map((ability,i)=>(
                           <div key={i}>
                            <span>{ability.ability.name}</span>
                           </div>
                       ))}
                       <h2 className='mt-4'>types</h2>
                       {props.types.map((types,i)=>(
                           <div key={i}>
                            <span>{types.type.name}</span>
                           </div>
                       ))}
                   </Card.Body>
               </Card>
               <Card className='mt-4'>
                    <Card.Body>
                        <h2>Stats</h2>    
                        {props.stats.map((stats,i)=>(
                            <div key={i}>
                                <strong>{stats.stat.name}</strong>
                                <ProgressBar now={stats.base_stat} max={255} label={stats.base_stat} />
                            </div>
                        ))}
                    </Card.Body>
                </Card>
           </Col>
       </Row>
    </Container>
  )
}

// abilities={pokemon.abilities}
//             stats={pokemon.stats}
//             types={pokemon.types}