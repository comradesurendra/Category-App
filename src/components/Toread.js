import React, { useEffect } from "react"
import ToRead from '../data/toread.json'
import './toread.css'
import {
  Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';

function Toread() {
  return (
    <div className='main-container'>
      
      {ToRead.map((Postdata, index) => {
        return <a href="#">
          <Card className="card">
            <div className='number'>{Postdata.sno}</div>
            <CardImg top width="100%" src={Postdata.img} alt="Card image cap" />
            <CardBody>
              <CardText className='text'>{Postdata.dis}</CardText>
              
            </CardBody>
          </Card>
        </a>
      })}
    </div>
  )
}

export default Toread