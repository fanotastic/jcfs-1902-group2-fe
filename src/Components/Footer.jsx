import React, { Component } from 'react';
import logo from '../img/logofix.png'
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai"
class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div style={{ backgroundColor: 'white'}} className="footer">
                <div style={{ paddingTop: '5px' }} className='container'>
                    <div className='row'>
                        <div className='col-md-8 py-4'>
                            <div style={{ width: "25%", paddingTop: 3, paddingBottom: 8 }}>
                                <img src={logo} width="100%" />
                            </div>
                            <p className='footerFont'>©Farmacia, 2022. All Rights Reserved</p>
                        </div>
                        <div className='col-md-4' style={{ paddingTop: 31 }}>
                            <div className='d-flex' style={{ justifyContent: 'space-between', marginBottom: 10 }}>
                                <p className='footerFont'>Our Products</p>
                                <p className='footerFont'>Buy by Recipes</p>
                                <p className='footerFont'>Contact</p>
                                <p className='footerFont'>About Us</p>
                            </div>
                            <div className='d-flex' style={{ float: 'right'}}>
                                <p className='footerFont' style={{ marginRight: 15 }}>Find us on: </p>
                                <p style={{ color: '#231953', fontWeight: 'bolder', fontSize: '20px' }}><AiFillFacebook/></p>
                                <p style={{ color: '#1A8CD8', fontWeight: 'bolder', fontSize: '20px' }}><AiFillTwitterCircle/></p>
                                <p style={{ color: '#231953', fontWeight: 'bolder', fontSize: '20px' }}><AiOutlineInstagram/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;