import React, { Component } from 'react';
import { MapInteractionCSS , MapInteraction} from 'react-map-interaction';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Poem} from './Poem'
import Footer from './Footer';

class Map extends Component{

    constructor(props){
        super(props)
        this.state = {
            img : './images/map.jpeg',
            value: {
                // scale: 0.170177,
                // translation: { x: -2.4473, y: 206.816 }
                scale: 0.159416,
                translation: {x: 20.1353, y: 96.2819 }
            }
        }
    }


    handleSetMapImage = (tagClass) => {
        this.setState({ img: tagClass  })
    }


    handleMakeChange = (tagClass) => {
        this.handleSetMapImage(tagClass);
        const element = document.querySelector(`.${tagClass}`)
        element.scrollIntoView({ behavior: 'smooth'});
        const checkOlder  = document.querySelector(`.highlight`);
        if(checkOlder){
            checkOlder.classList.remove('highlight');
        }
        element.classList.add('highlight');
    }

    // handleChangeLocationOnWordClick = (tagClass) => {
    //     this.handleSetMapImage(tagClass);
    // }

    render(){
        // console.log( this.state.value )
        const { img } = this.state
        const checkImages = ['temple-bar', 'birchin-lane', 'cheapeside-market', 'fleete-street', 'fleete-prison']
        return (
            <Container fluid>
                <Row>
                    <Col className='col-sm-8 col-4 fixed-top one'>
                        <Button variant="primary" onClick={() => this.handleMakeChange('birchin-lane')}>Birchin Lane</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('cheapeside-market')}>Cheapside Market</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('fleete-street')}>Fleet Street</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('fleete-prison')}>Fleet Prison</Button>
                        <Button variant="primary" onClick={() => this.handleMakeChange('temple-bar')}>Temple Bar</Button>
                        <div className='map-container'>
                            <MapInteractionCSS
                                value={this.state.value}
                                onChange={(value) => this.setState({ value })}
                                showControls={true}
                            >
                                {/* {img === 'birchin-lane' && <Image src={`./images/${img}.png`} />}
                                {img === 'cheapeside-market' && <Image src={`./images/${img}.png`} />}
                                {img === 'fleete-street' && <Image src={`./images/${img}.png`} />}
                                {img === 'fleete-prison' && <Image src={`./images/${img}.png`} />}
                                {img === 'temple-bar' && <Image src={`./images/${img}.png`} />} */}
                                { !checkImages.includes(img) 
                                    ?  <Image src={img} />
                                    :  <Image src={`./images/${img}.jpg`} />
                                }
        
                            </MapInteractionCSS>
                        </div>
                    </Col>
                    <Col md="auto" className='col-sm-4 offset-sm-8 two'>
                        <Poem 
                            handleChangeLocationOnWordClick={this.handleMakeChange}
                        />
                    </Col>
                </Row>
                <Footer/>
            </Container>
        )
    }
}

export default Map;

